import React from "react";
import Image from 'next/image'


function Stack() {
  return (
    <div className="w-fit	grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <div className="bg-white h-auto rounded-lg flex">
            <Image
                src="/images/react_icon.png"
                width={256}
                height={256}
                className="h-auto w-64 m-auto p-4"
                alt="react"
            />
        </div>
        <div className="bg-white h-auto rounded-lg flex">
            <Image
                src="/images/node_icon.png"
                width={256}
                height={256}
                className="h-auto w-64 m-auto p-4"
                alt="node.js"
            />
        </div>
        <div className="bg-white h-auto rounded-lg flex">
            <Image
                src="/images/sql_icon.png"
                width={256}
                height={256}
                className="h-auto w-64 m-auto p-4"
                alt="mysql"
            />
        </div>
        <div className="bg-white h-auto rounded-lg flex">
            <Image
                src="/images/git_icon.png"
                width={256}
                height={256}
                className="h-auto w-64 m-auto p-4"
                alt="git"
            />
        </div>
        <div className="bg-white h-auto rounded-lg flex">
            <Image
                src="/images/tailwind_icon.png"
                width={256}
                height={256}
                className="h-auto w-64 m-auto p-4"
                alt="tailwind"
            />         
        </div>
        <div className="bg-white h-auto rounded-lg flex">
            <Image
                src="/images/firebase_icon.png"
                width={256}
                height={256}
                className="h-auto w-64 m-auto p-4"
                alt="firebase"
            /> 
        </div>
        <div className="bg-white h-auto rounded-lg flex">
            <Image
                src="/images/php_icon.png"
                width={256}
                height={256}
                className="h-auto w-64 m-auto p-4"
                alt="php"
            /> 
        </div>
        <div className="bg-white h-auto rounded-lg flex">
            <Image
                src="/images/java_icon.png"
                width={256}
                height={256}
                className="h-auto w-64 m-auto p-4"
                alt="java"
            /> 
        </div>
    </div>
  )
}

export default Stack;