import { user } from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
      const {id} = params;
      const User = await user.findById(id);
      return NextResponse.json({User})
} 


 export async function DELETE (request,{params}){
       const {id} = params;
       try {
            await user.deleteOne({
                  _id:id
            })
            return NextResponse({
                  massage:"delete api is work",
                  sucess : true
            })
       } catch (error) {
              return NextResponse({
                  massage:"delete api is not work",
                  sucess : false
            })
            
       }



 }

 export async function PUT(request,{params}){
      const {id} = params;
      const {name,email,about,password,profileURL} = await request.json();
      try { 
            const User = await user.findById(id)

            User.name =name;
            User.about = about;
            User.email = email;
            User.password = password;
            User.profileURL = profileURL;
            
           const updateUser = await User.save()
           return NextResponse.json(updateUser)

      } catch (error) {
           return  NextResponse.json({
            massege:"Failed to update user",
            sucess : false
           })
            
            
      }
 }