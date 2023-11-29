import { auth } from "@clerk/nextjs"
import Dropzone from "@/components/Dropzone";


function  Dashboard()  {
  const { UserId } = auth();
  return (
    <div>
        <Dropzone /> 
    </div>
  )
}

export default Dashboard;
