import { useState } from "react";

const Rateus = () => {
  const [reviewInput, setReviewInput] = useState("");
  const [comments, setComments] = useState([]);
  const [userStarRate, setUserStarRate] = useState(0);
  const [nameNum, setNameNum] = useState(1);

  const handleStarClick = (rate) => {
    setUserStarRate(rate);
  };

  const handlePostReview = () => {
    if (userStarRate === 0) {
      alert("Please select a star rating first!");
    } else if (reviewInput.trim() === "") {
      alert("Comment cannot be empty!");
    } else {
      const newComment = {
        username: `username ${nameNum}`,
        date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`,
        content: reviewInput,
        stars: userStarRate,
      };
      setComments([newComment, ...comments]);
      setNameNum(nameNum + 1);
      setReviewInput("");
      setUserStarRate(0);
    }
  };

  return (
    <section id="Rate Us" className="my-14 mx-24 flex flex-col">
      <h2 className='text-[#5c3411] font-bold text-2xl mb-10'>RATE US</h2>

      <div className="flex bg-[url('/tasty.jpg')] bg-center  justify-start items-center bg-white p-6 rounded-xl shadow-lg gap-10 relative">

         {/* Star Rating */}
         <div className="flex flex-col bg-white/80 rounded-xl p-2">
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <div
                key={star}
                className={`cursor-pointer p-2 rounded-full`}
                onClick={() => handleStarClick(star)}
              >
                <img
                  src={userStarRate >= star ? "/starGold.svg" : "/star-regular.svg"}
                  alt="Star"
                  className="w-8"
                />
              </div>
            ))}
          </div>
          <img src="/ratings.png" className="" alt="" />
        </div>

        <div className="bg-white/80 rounded-xl p-4">
          <div className="flex flex-col gap-3">
            <label className="text-lg font-medium" htmlFor="comment">Leave a Comment</label>
            <textarea
              id="reviewInput"
              className="h-40 bg-transparent  p-3 border-[1px] border-black rounded-md focus:border-blue-500 outline-none placeholder:text-black text-semibold text-lg"
              placeholder="Write your review here"
              value={reviewInput}
              cols={65}
              onChange={(e) => setReviewInput(e.target.value)}
            ></textarea>
          </div>
        </div>

        <button 
        onClick={handlePostReview}
        className="absolute bottom-9 right-5 bg-[#845226] text-[#f7cb7f] font-semibold px-4 py-2 rounded-full shadow-md hover:bg-[#5c3411] duration-150">Post Comment</button>

      </div>
            
      {/* Comments */}
      <div className="bg-white p-6 mt-10 rounded-xl border-4 border-[#f9b85c]">
        <h3 className="text-xl font-medium mb-4">Top Comments</h3>
        <div className="flex gap-4 overflow-x-auto">
          {comments.length > 0 ? comments.map((comment, index) => (
            <div key={index} className="min-w-[450px] bg-blue-50 p-4 rounded-md shadow-md">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <img src="/user-solid.svg" alt="User" className="w-6" />
                  <span className="font-semibold">{comment.username}</span>
                </div>
                <span className="text-sm">{comment.date}</span>
              </div>
              <p className="mb-4">{comment.content}</p>
              <div className="flex gap-1">
                {[...Array(comment.stars)].map((_, starIndex) => (
                  <img key={starIndex} src="/starGold.svg" alt="Star" className="w-6" />
                ))
                }
              </div>
            </div>
          ))
        : <p className="text-slate-400">No comments</p>}
        </div>
      </div>
    </section>
  );
};

export default Rateus;
