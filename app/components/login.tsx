"use client";

import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use this to navigate between pages
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from './firebase';
import { toast } from 'react-toastify';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [activeTab, setActiveTab] = useState("login");
    const navigate = useNavigate(); // To navigate to the chat page after login/signup

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            // await signInWithEmailAndPassword(auth, email, password);
            console.log("User Logged in Successfully");
            toast.success("User logged in Successfully", {
                position: "top-center",
            });
            navigate('/giftchatbot'); // Immediately navigate after successful login
        } catch (error) {
            console.error("Error during login:", error);
            toast.error("Error during login!", {
                position: "bottom-center",
            });
        }
    };

    const handleSignupDoubleClick = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(`Form submitted: ${activeTab}`);

        // Simulate successful signup
        navigate('/signup'); // Navigate to the signup page after double-click
    };

    const handleSingleClick = () => {
        console.log("Single click detected");
        // Handle any specific single-click logic if needed
    };

    return (
        <div className="min-h-screen w-full bg-[#433878] flex items-center justify-center p-4">
            {/* Main container split into two sections */}
            <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex overflow-hidden">

                {/* Left Section - Logo */}
                <div className="hidden lg:flex flex-col justify-center items-center bg-[#7E60BF] w-1/2 p-8">
                    <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="600" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gift"><rect x="3" y="8" width="18" height="4" rx="1" /><path d="M12 8v13" /><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" /><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" /></svg>
                        <h1 className="text-5xl font-bold text-white mb-4">HappiWrap</h1>
                        <p className="text-xl text-[#FFE1FF]">Wrap Your World in Happiness</p>
                    </div>
                </div>

                {/* Right Section - Auth Forms */}
                <div className="w-full lg:w-1/2 p-8">
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold text-[#7E60BF]">Welcome to HappiWrap</h2>
                        <p className="text-[#7E60BF]/80">Your AI-powered gifting assistant</p>
                    </div>

                    {/* Tabs for login/signup */}
                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                        <TabsList className="grid w-full grid-cols-2 mb-4 bg-[#433878] rounded-md">
                            <TabsTrigger value="login" className="text-[#E4B1F0]">Login</TabsTrigger>
                            <TabsTrigger 
                                value="signup" 
                                className="text-[#E4B1F0]" 
                                onClick={handleSingleClick} 
                                onDoubleClick={handleSignupDoubleClick}
                            >
                                Sign Up
                            </TabsTrigger>
                        </TabsList>

                        {/* Login Form */}
                        <TabsContent value="login">
                            <form onSubmit={handleSubmit}>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-[#7E60BF]">Email</Label>
                                        <Input 
                                            id="email" 
                                            type="email" 
                                            value={email} 
                                            onChange={(e) => setEmail(e.target.value)} 
                                            placeholder="m@example.com" 
                                            required 
                                            className="bg-white text-[#7E60BF]" 
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password" className="text-[#7E60BF]">Password</Label>
                                        <Input 
                                            id="password" 
                                            type="password" 
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)} 
                                            required 
                                            className="bg-white text-[#7E60BF]" 
                                        />
                                    </div>
                                </div>
                                <Button type="submit" className="w-full mt-4 bg-[#FFE1FF] text-[#7E60BF]">Login</Button>
                            </form>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
