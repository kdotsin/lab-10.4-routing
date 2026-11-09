import { useAuth } from "../auth-context"

export default function Admin() {
    const { isAuthenticated } = useAuth()
    return (
        <div>
            { isAuthenticated ? (
                <h1>Welcome you have access to Admin Page</h1>
            ) : <h1>User must log in to access admin page</h1>}
        </div>
    )
}