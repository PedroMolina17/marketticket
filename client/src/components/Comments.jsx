import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
const Comments = ({ commentsOpen, movieId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/events/api/v1/review/?movie=${movieId}`
        );
        const commentsWithUserDetails = await Promise.all(
          response.data.map(async (comment) => {
            const userResponse = await axios.get(
              `http://localhost:8000/events/api/v1/user/${comment.user}`
            );
            const userProfileResponse = await axios.get(
              `http://localhost:8000/events/api/v1/userprofile/${comment.user}`
            );
            return {
              profile_picture: userProfileResponse.data.profile_picture,
              username: userResponse.data.username,
              comment: comment.comment,
              rating: comment.rating,
              title: comment.title,
              time: comment.comment_time,
            };
          })
        );

        setComments(commentsWithUserDetails);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    if (commentsOpen) {
      fetchComments();
    }
  }, [commentsOpen, movieId]);

  return (
    <div
      className={`flex justify-center items-center  flex-col gap-3 my-4 ${
        commentsOpen ? "" : "hidden"
      }`}
    >
      Reseñas
      {comments.map((comment, index) => (
        <div key={index} className="text-black ">
          <div className="bg-[#f1f1f1]  rounded-lg min-w-96 flex flex-col gap-2 p-4">
            <div className="flex items-center text-red-500 gap-2 bg-[#ffffff] w-14 rounded-full justify-center">
              <FaStar /> {comment.rating}
            </div>{" "}
            <strong className="text-xl">{comment.title}</strong>
            <p className="text-sm">{comment.comment}</p>
            <div className="flex gap-4 pt-2">
              <img
                className=" rounded-full"
                src={comment.profile_picture}
                alt="a"
                width={50}
                height={50}
              />{" "}
              <div className="flex flex-col">
                <strong>{comment.username}</strong>
                {comment.time && (
                  <p className="text-black">
                    {new Date(comment.time).toLocaleDateString("es-ES", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
Comments.propTypes = {
  commentsOpen: PropTypes.bool.isRequired,
  movieId: PropTypes.string.isRequired,
};
export default Comments;
