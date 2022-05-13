import React from "react";
import ReactDOM from "react-dom/client";
import faker from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./Approvalcard";

const App = () => {
  return (
    <div className="ui container comments">

      <ApprovalCard>
        <CommentDetail
          author="John"
          date="7:00pm"
          text="Thanks for this"
          image={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Helen"
          date="9:00pm"
          text="What is this nonsense about"
          image={faker.image.avatar()}
        />    
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail
          author="Davies"
          date=" 12:00am"
          text="Nice content"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
