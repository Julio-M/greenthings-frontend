import React from "react";
import NewLeisureActivityForm from "./NewLeisureActivityForm";

function FormPage(){
    return(
        <>
            <h1 style={{textAlign: "center", padding: "30px 40px"}}>Are you doing green things? Show it here!</h1>
            <NewLeisureActivityForm />
        </>
    )
}

export default FormPage;