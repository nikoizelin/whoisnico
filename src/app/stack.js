'use client'

function Stack() {
  return (
    <div className="w-fit	grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <div className="bg-white h-auto rounded-lg flex">
            <img className="h-auto w-64 m-auto p-4" src="/images/react_icon.png" alt="react" />
        </div>
        <div className="bg-white h-auto rounded-lg flex">
            <img className="h-auto w-64 m-auto p-4" src="/images/node_icon.png" alt="node.js" />
        </div>
        <div className="bg-white h-auto rounded-lg flex">
            <img className="h-auto w-64 m-auto p-4" src="/images/sql_icon.png" alt="mysql" />
        </div>
        <div className="bg-white h-auto rounded-lg flex">
            <img className="h-auto w-64 m-auto p-4" src="/images/git_icon.png" alt="git" />
        </div>
        <div className="bg-white h-auto rounded-lg flex">
            <img className="h-auto w-64 m-auto p-4" src="/images/tailwind_icon.png" alt="tailwind" />
        </div>
        <div className="bg-white h-auto rounded-lg flex">
            <img className="h-auto w-64 m-auto p-4" src="/images/firebase_icon.png" alt="firebase" />
        </div>
        <div className="bg-white h-auto rounded-lg flex">
            <img className="h-auto w-64 m-auto p-4" src="/images/php_icon.png" alt="php" />
        </div>
        <div className="bg-white h-auto rounded-lg flex">
            <img className="h-auto w-64 m-auto p-4" src="/images/java_icon.png" alt="java" />
        </div>
    </div>
  )
}

export default Stack;