import { gql } from "@apollo/client";


const CREATEENQUIRY = gql`
mutation
  createEnquiry($name:String, $surname:String, $phone_number: String, $message:String , $email:String){createEnquiry(data:{
    name: $name
    surname: $surname
    phone_number: $phone_number
    message: $message
    email: $email
  })
    {
    data{
      attributes{
        name
        surname
        phone_number
        message
      }
    }
    }
  }
`

export {CREATEENQUIRY}