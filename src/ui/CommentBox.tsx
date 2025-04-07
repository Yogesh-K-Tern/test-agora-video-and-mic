import React, { useState } from "react";
import { Loader } from "react-feather";
import { Button } from "./Button/Button";
// import { sleep } from '../../utils/common';

interface iComments {
  withSubmitBtn?: boolean;
  onSubmit?: any;
}

function CommentBox({ withSubmitBtn, onSubmit }: iComments) {
  const [comment, setComment] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (comment.length === 0) {
      setIsError(true);
      return;
    }
    setIsError(false);
    setIsLoading(true);
    // await sleep(3);
    // await onSubmit();
    setIsLoading(false);
  };

  return (
    <div className="">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.currentTarget.value)}
        className={`bg-gray-200 p-3 rounded-xl outline-none w-1[00px] md:w-full border ${
          isError && "border-red-500"
        }`}
        cols={10}
        rows={10}
        placeholder="Ask another question"
      />
      <Button
        icon={isLoading ? (Loader as any) : null}
        iconPosition="start"
        onClick={handleSubmit}
        className="text-black"
        label="Submit Question"
        buttonStyle="outline"
      />
    </div>
  );
}

export default CommentBox;
