import Dropzone from "@/components/Dropzone";
import TableWrapper from "@/components/table/TableWrapper";
import { db } from "@/firebase";
import { FileType} from "@/typeings";
import { auth } from "@clerk/nextjs"
import { collection, getDocs } from "firebase/firestore";




 async function  Dashboard()  {
  const { userId } = auth();
   const docResults = await getDocs(collection(db, "users", userId!, "files"));
   const skeletonFiles: FileType[] = docResults.docs.map((doc) => ({
     id: doc.id,
     fileName: doc.data().fileName || doc.id,
     timeStamp: new Date(doc.data().timeStamp?.seconds * 1000) ||
       undefined,
     fullName: doc.data().fullName,
     downloadUrl: doc.data().downloadUrl,
     type: doc.data().type,
     size: doc.data().size,
   }));
   console.log(skeletonFiles);
   
   
  return (
    <div className="border-t">
      <Dropzone />
      <section className="container space-y-5">
        <h2 className="font-bold"> All files</h2>
        <div>
          {/* tab wrapper */}
          <TableWrapper
            skeletonFiles={skeletonFiles}
          />
        </div>
      </section>
    </div>
  )
}

export default Dashboard;
