"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button1_1 = __importDefault(require("../components/button1/Button1"));
const About = () => {
    return (<div className="bg-slate-300 flex flex-col justify-center items-center h-screen">
      <div className="bg-slate-400 text-black font-semibold text-5xl p-6 rounded-xl hover:bg-slate-700 transform hover:scale-110 transition duration-100">About</div>
      <div className='my-5 mx-5'>
        <Button1_1.default />
        </div>
    </div>);
};
exports.default = About;
