import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import "../../css/BaseScreen.css";
import requests from "../../requests";
import { ChooseSkillDialog } from "../dialogs/ChooseSkillDialog";
import { LoaderDialog } from "../dialogs/LoaderDialog";
import { CourseItem } from "./CourseItem";
import BottomBar from "../navigation/Bottombar";

export const CoursePage = () => {
  var data;

  const navigate = useNavigate();

  const [cookies, setCookies] = useCookies(["skill"]);
  const [allCourseList, setAllCourseList] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState(0);
  const [isChooseSkillDialogOpen, setIsChooseSkillDialogOpen] = useState(false);
  const [isLoadingDialogOpen, setLoadingDialogOpen] = useState(true);

  console.log("Cookie Skill :" + cookies.skill);
  if (!data) {
    data = {
      aim: "Courses",
      skill: cookies.skill,
    };
  }
  useEffect(() => {
    function getData(skill) {
      setLoadingDialogOpen(true);
      axios
        .get(`${requests.courses}/?q=${skill}`)
        .then((sync) => sync.data)
        .then((data) => {
          setLoadingDialogOpen(false);
          setAllCourseList(data);
          console.log("RESPONSE", data);
        });
    }
    getData(data.skill);
  }, [data.skill]);

  const platformTabs = allCourseList.map((courses, index) => {
    return (
      <div
        className={
          selectedPlatform === index
            ? "platforms-tab-selected"
            : "platforms-tab-unselected"
        }
        onClick={() => {
          setSelectedPlatform(index);
          console.log("selected " + index);
        }}
      >
        <div
          className={
            selectedPlatform === index
              ? "platforms-tab-text-selected"
              : "platforms-tab-text-unselected"
          }
        >
          {courses.platformName}
        </div>
      </div>
    );
  });
  var courses = allCourseList[selectedPlatform];

  const courseItems = courses
    ? courses.courses.map((course, index) => {
        return (
          <CourseItem
            imgUrl={course.imgUrl}
            title={course.title}
            description={course.usp}
            url={course.url}
            price={course.price}
          />
        );
      })
    : [].map((course, index) => {
        return (
          <CourseItem
            imgUrl={course.imgUrl}
            title={course.title}
            description={course.usp}
            url={course.url}
            price={course.price}
          />
        );
      });

  function setSkill(skill) {
    data.skill = skill;
  }

  return (
    <div className="base-screen">
      <ChooseSkillDialog
        isChooseSkillDialogOpen={isChooseSkillDialogOpen}
        setSkill={setSkill}
        setIsChooseSkillDialogOpen={setIsChooseSkillDialogOpen}
      />
      <LoaderDialog
        aim={data.aim.toLowerCase()}
        isLoadingDialogOpen={isLoadingDialogOpen}
        setIsLoadingDialogOpen={setLoadingDialogOpen}
      />
      <BottomBar select={0} />
      <div className="main-section-header">
        <div className="title-and--dropdown-section">
          <div className="aim-title-text">{data.aim} for</div>
          <div
            className="skill-selector"
            onClick={() => {
              setIsChooseSkillDialogOpen(true);
            }}
          >
            <div className="skill-selector-content">
              <div className="skill-name-text">{data.skill}</div>
              <svg
                className="edit-icon"
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.4635 4.03948C13.58 4.03948 13.6917 4.08575 13.774 4.1681L16.258 6.65212C16.4295 6.8236 16.4295 7.10164 16.258 7.27312L8.18495 15.3462C8.12978 15.4014 8.06091 15.4408 7.98543 15.4606L4.62317 16.3388C4.47234 16.3782 4.31193 16.3347 4.20169 16.2244C4.09146 16.1142 4.04793 15.9538 4.08733 15.8029L4.96557 12.4407C4.98528 12.3652 5.02476 12.2963 5.07993 12.2412L13.153 4.1681C13.2353 4.08575 13.347 4.03948 13.4635 4.03948Z"
                  fill="white"
                />
                <path
                  d="M4.14842 17.8717C3.78465 17.8717 3.48975 18.1666 3.48975 18.5303C3.48975 18.8941 3.78465 19.189 4.14842 19.189H17.3219C17.6857 19.189 17.9806 18.8941 17.9806 18.5303C17.9806 18.1666 17.6857 17.8717 17.3219 17.8717H4.14842Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="platforms-tab-list"> {platformTabs}</div>
        <div className="jobList">{courseItems}</div>
      </div>
      <div className="sidebar">
        <div className="logo">13bhai</div>
        <div className="tabs-list">
          <div
            className="tab-selected"
            onClick={() => {
              navigate("/courses");
            }}
          >
            <svg
              className="tab-selected-icon"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="#9A76FF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.8553 3.30176C12.6119 3.23267 12.3551 3.23273 12.1116 3.30203C11.5931 3.44957 11.0697 3.58623 10.5445 3.72335C8.20087 4.33527 5.62037 5.00904 3.41292 6.81037L2.37215 7.65967C1.54221 8.33693 1.54264 9.66327 2.3733 10.3398L3.39724 11.1738C4.15371 11.79 4.94208 12.2719 5.75 12.665V17.2939C5.75 18.4272 6.44522 19.4444 7.5011 19.8561L11.5011 21.4156C12.1435 21.666 12.8565 21.666 13.4989 21.4156L17.4989 19.8561C18.5548 19.4444 19.25 18.4272 19.25 17.2939V12.6733C20.0526 12.2823 20.8357 11.8028 21.5871 11.1896L21.75 11.0567V16C21.75 16.4142 22.0858 16.75 22.5 16.75C22.9142 16.75 23.25 16.4142 23.25 16V9C23.2498 8.49918 23.042 7.99845 22.6267 7.66016L21.6028 6.82618C19.3793 5.01516 16.6903 4.31386 14.4192 3.72153C13.8952 3.58485 13.3729 3.44863 12.8553 3.30176ZM8.79914 12.8122C8.4193 12.647 7.97745 12.821 7.81224 13.2009C7.64704 13.5807 7.82103 14.0226 8.20087 14.1878C9.47872 14.7435 10.8015 15.1983 12.1571 15.5462C12.3933 15.6068 12.6411 15.6068 12.8773 15.5459C14.2292 15.198 15.5481 14.7432 16.8219 14.1874C17.2015 14.0217 17.375 13.5797 17.2093 13.2C17.0436 12.8204 16.6016 12.6469 16.2219 12.8126C15.0253 13.3348 13.7865 13.7623 12.5167 14.0899C11.243 13.7622 10 13.3346 8.79914 12.8122Z"
                fill="#9A76FF"
              />
            </svg>
            <div className="tab-selected-text">Courses</div>
          </div>
          <div
            className="tab-unselected"
            onClick={() => {
              navigate("/jobs");
            }}
          >
            <svg
              className="tab-unselected-icon"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.75 2.5C14.75 2.36193 14.6381 2.25 14.5 2.25H7.5C5.98122 2.25 4.75 3.48122 4.75 5V19C4.75 20.5188 5.98122 21.75 7.5 21.75H17.5C19.0188 21.75 20.25 20.5188 20.25 19V9.14706C20.25 9.00899 20.1381 8.89706 20 8.89706H15.5C15.0858 8.89706 14.75 8.56127 14.75 8.14706V2.5ZM15.5 12.25C15.9142 12.25 16.25 12.5858 16.25 13C16.25 13.4142 15.9142 13.75 15.5 13.75H9.5C9.08579 13.75 8.75 13.4142 8.75 13C8.75 12.5858 9.08579 12.25 9.5 12.25H15.5ZM15.5 16.25C15.9142 16.25 16.25 16.5858 16.25 17C16.25 17.4142 15.9142 17.75 15.5 17.75H9.5C9.08579 17.75 8.75 17.4142 8.75 17C8.75 16.5858 9.08579 16.25 9.5 16.25H15.5Z"
                fill="white"
              />
              <path
                d="M16.25 2.82414C16.25 2.63964 16.4426 2.5225 16.5862 2.63839C16.7071 2.736 16.8158 2.85036 16.9085 2.97955L19.9217 7.17745C19.9903 7.27302 19.916 7.39706 19.7983 7.39706H16.5C16.3619 7.39706 16.25 7.28513 16.25 7.14706V2.82414Z"
                fill="white"
              />
            </svg>
            <div className="tab-unselected-text">Job Posts</div>
          </div>
          <div
            className="tab-unselected"
            onClick={() => {
              navigate("/hackathons");
            }}
          >
            <svg
              className="tab-unselected-icon"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6041 3.03532C13.0635 2.85997 11.508 2.85997 9.9674 3.03532L8.37207 3.21691C8.13609 3.24376 7.95157 3.43292 7.93058 3.6695L7.80795 5.05128C7.60178 7.3745 7.60178 9.71143 7.80795 12.0347L7.93058 13.4164C7.95347 13.6744 8.16961 13.8722 8.42862 13.8722H10.5V21.2747C10.5 21.4871 10.6343 21.6763 10.8347 21.7466C11.0352 21.8168 11.2582 21.7527 11.3907 21.5867L11.7814 21.0975C14.1108 18.1811 15.9657 14.9155 17.2777 11.4211L17.4681 10.9138C17.5258 10.7603 17.5045 10.5882 17.4111 10.4534C17.3177 10.3185 17.1641 10.2381 17 10.2381H14.287L16.6124 3.88558C16.6651 3.7416 16.6489 3.58141 16.5683 3.45096C16.4877 3.32052 16.3518 3.23424 16.1995 3.21691L14.6041 3.03532Z"
                fill="#CCCCCC"
              />
            </svg>

            <div className="tab-unselected-text">Hackathons</div>
          </div>
        </div>
      </div>
    </div>
  );
};
