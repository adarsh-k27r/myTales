import React from "react";
import { Button, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Publish = () => {
  return (
    <>
      <div className="p-3 max-w-3xl mx-auto">
        <h1 className="text-center text-3xl my-3 font-semibold">
          Share your story
        </h1>
        <form className="flex flex-col gap-4">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
          />

          <ReactQuill
            theme="snow"
            placeholder="It's confession time:> Just do it!"
            className="h-72 mb-12"
            required
          />

          <Button type="submit" gradientDuoTone="redToYellow">
            Publish
          </Button>
        </form>
      </div>
    </>
  );
};

export default Publish;
