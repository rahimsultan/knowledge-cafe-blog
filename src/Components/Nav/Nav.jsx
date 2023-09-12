import profile from "../../assets/profile.png"
const Nav = () => {
  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto px-3 py-4 border-b-2">
        <h2 className="font-bold text-4xl ">Knowledge Cafe</h2>
        <img src={profile} className="w-[50px]" />
    </div>
  )
}

export default Nav