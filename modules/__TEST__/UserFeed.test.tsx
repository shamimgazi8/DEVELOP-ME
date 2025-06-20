/// <reference types="jest" />
import React from "react";
import { render, screen } from "@testing-library/react";
import UserFeed from "../components/UserFeed";

const mockUseUsers = jest.fn();

jest.mock("@/hooks/useUsers", () => ({
  useUsers: () => mockUseUsers(),
}));

jest.mock("../components/UserCard", () => ({ user }: any) => (
  <div data-testid="user-card">{user.firstName}</div>
));

// Helper to create minimal valid UseInfiniteQueryResult shape
function createUseUsersReturn(overrides: Partial<any> = {}) {
  return {
    data: { pages: [], pageParams: [] },
    fetchNextPage: jest.fn(),
    hasNextPage: false,
    isFetchingNextPage: false,
    isPending: false,
    isError: false,
    error: null,
    ...overrides,
  };
}

describe("UserFeed", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders error message when error", () => {
    mockUseUsers.mockReturnValue(
      createUseUsersReturn({
        isError: true,
        error: new Error("Failed to load"),
      })
    );

    render(<UserFeed />);
    expect(screen.getByText(/Failed to load/i)).toBeInTheDocument();
  });

  it("renders user cards when data is present", () => {
    mockUseUsers.mockReturnValue(
      createUseUsersReturn({
        data: {
          pages: [
            {
              users: [
                {
                  id: 1,
                  firstName: "John",
                  lastName: "Doe",
                  email: "",
                  phone: "",
                  image: "",
                  university: "",
                  company: { title: "" },
                },
                {
                  id: 2,
                  firstName: "Jane",
                  lastName: "Doe",
                  email: "",
                  phone: "",
                  image: "",
                  university: "",
                  company: { title: "" },
                },
              ],
            },
          ],
          pageParams: [],
        },
      })
    );

    render(<UserFeed />);
    expect(screen.getAllByTestId("user-card")).toHaveLength(2);
    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Jane")).toBeInTheDocument();
  });
});
