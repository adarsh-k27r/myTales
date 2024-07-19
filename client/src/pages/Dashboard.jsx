import React, { useEffect, useState } from "react";
import "../stylesheets/utils.css";
import PrivateCard from "../components/PrivateCard";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import {
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
} from "../redux/user/userSlice";

function Dashboard() {
  const { currentUser, error } = useSelector((state) => state.user);
  const [userPosts, setUserPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
        const data = await res.json();
        if (res.ok) {
          setUserPosts(data.posts);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUserPosts();
  }, []);

  // Delete Post function.

  const deletePost = async (postIdToDelete) => {
    try {
      const res = await fetch(
        `/api/post/deletepost/${postIdToDelete}/${currentUser._id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUserPosts((prev) => {
          return prev.filter((post) => post._id !== postIdToDelete);
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Handle Delete Account

  const handleDeleteUser = async () => {
    setShowModal(false);
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(deleteUserFailure(data.message));
      } else {
        dispatch(deleteUserSuccess(data));
      }
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row justify-center sm:justify-start items-center sm:items-start w-[100%]  ">
        <div className="w-[100%] sm:w-[80%]  ">
          <h3 className="font_open_sans text-[1rem] font-[900] text-black tracking-[2px] my-[2%] mx-[0] text-center">
            Your Stories
          </h3>

          <section className="flex flex-wrap flex-col-reverse sm:flex-row items-center sm:items-start ">
            {userPosts.length > 0 ? (
              <>
                {userPosts.map((post) => {
                  return (
                    <PrivateCard
                      key={post._id}
                      post={post}
                      deletePost={deletePost}
                    />
                  );
                })}
              </>
            ) : (
              <p className="!text-center ml-2 text-red-500 ">
                You haven't posted anything yet!{" "}
              </p>
            )}
          </section>
        </div>
        <div className="hidden sm:flex justify-between items-center bg_quit h-[89vh] fixed font_open_sans w-[20%] border-l border-solid border-gray-600 right-0 bg-white flex-col    ">
          <p className="font_verdana text-lg font-[600] my-[1%] mx-[auto]  ">
            Hii {currentUser.name}{" "}
          </p>
          <Button
            type="button"
            gradientDuoTone="redToYellow"
            className=" font-medium cursor-pointer "
            onClick={() => setShowModal(true)}
          >
            Delete Account
          </Button>
        </div>
        {error && (
          <Alert color="failure" className="mt-5">
            {error}
          </Alert>
        )}
        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          popup
          size="md"
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 mb-4 mx-auto" />
              <h3 className="mb-5 text-lg text-gray-500 ">
                Are you sure you want to delete your account?
              </h3>
              <div className="flex justify-center gap-4">
                <Button color="failure" onClick={handleDeleteUser}>
                  Yes, I'm sure
                </Button>
                <Button color="gray" onClick={() => setShowModal(false)}>
                  No, cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Dashboard;
