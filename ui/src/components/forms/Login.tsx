import { useState } from "react";
import { Input } from "../utils/input";

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-20 mx-auto flex flex-wrap items-center">
                <div className="lg:w-2/6 md:w-1/2 rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
                    <Input
                        id={"username"}
                        type={"text"}
                        label={"Username"}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        id={"password"}
                        type={"password"}
                        label={"Password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Submit</button>
                    <p className="text-xs text-gray-500 mt-3">Forgot your password?<a>Click here</a></p>
                </div>
            </div>
        </section>
    )
}