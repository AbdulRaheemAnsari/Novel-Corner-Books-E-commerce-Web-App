import './profile.css'
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, logout } = useAuth0();

  return (
    <div className='profile'>
      {isAuthenticated && <div className='profileinner'>
        <div className="profileimage">
        <img className='profileimg' src={user.picture} alt={user.name} />
        </div>
        <div className="profilename">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
        {isAuthenticated && <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>}
      </div>}
    </div>
  )
}

export default Profile;