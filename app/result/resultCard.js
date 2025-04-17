export default function ResultCard({user}) {

  if (user) {
    return (
      <>
        <img src={user.images[0].url} height="300" width="300" alt="User's profile picture" />
        <p>{user.display_name}</p>
      </>
    )
  }

  // return <p>User not found</p>
}