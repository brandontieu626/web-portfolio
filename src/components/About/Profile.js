

const Profile = ({source}) => {
  const profileStyle= {
    borderRadius:'25px',
    display:'flex',
    height:'400px',
    width:'400px',
    boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.5)',
  }

  return (
    <img style={profileStyle} src={source}/>
  )
}

export default Profile;