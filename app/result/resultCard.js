export default function ResultCard({user, images}) {

  if (user && images) {
    return (
      <>
        <div className="relative">
          <img className="absolute -top-4 -left-16" src={images[0]} height="96" width="96" alt="Artist picture" />
          <img className="absolute top-27 -left-16" src={images[1]} height="96" width="96" alt="Artist picture" />
          <img className="absolute -bottom-4 -left-16" src={images[2]} height="96" width="96" alt="Artist picture" />
          <img className="-z-10" src={user.images[0].url} height="300" width="300" alt="User's profile picture" />
          <img className="absolute -top-4 -right-16" src={images[3]} height="96" width="96" alt="Artist picture" />
          <img className="absolute top-27 -right-16" src={images[4]} height="96" width="96" alt="Artist picture" />
          <img className="absolute -bottom-4 -right-16" src={images[5]} height="96" width="96" alt="Artist picture" />
        </div>

        <p>{user.display_name}</p>
      </>
    )
  }

  // return <p>User not found</p>
}