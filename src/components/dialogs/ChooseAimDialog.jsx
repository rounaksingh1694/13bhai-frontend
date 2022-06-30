import React from "react";
import "../../css/dialogs/BaseDialog.css";
import "../../css/dialogs/ChooseAimDialog.css";

export const ChooseAim = ({
  isChooseAimDialogOpen,
  setAim,
  setIsChooseAimDialogOpen,
}) => {
  var dialog = (
    <div
      className="base-dialog"
      onClick={() => {
        setIsChooseAimDialogOpen(false);
      }}
    >
      <div className="choose-aim">
        <div
          className="option"
          onClick={() => {
            setAim("Courses");
            setIsChooseAimDialogOpen(!isChooseAimDialogOpen);
          }}
        >
          <div className="option-text">Courses</div>
        </div>
        <div
          className="option"
          onClick={() => {
            setAim("Freelance Jobs");
            setIsChooseAimDialogOpen(!isChooseAimDialogOpen);
          }}
        >
          <div className="option-text">Freelance Jobs</div>
        </div>
        <div
          className="option"
          onClick={() => {
            setAim("Hackathons");
            setIsChooseAimDialogOpen(!isChooseAimDialogOpen);
          }}
        >
          <div className="option-text">Hackathons</div>
        </div>
      </div>
    </div>
  );

  if (!isChooseAimDialogOpen) dialog = null;

  return <div>{dialog}</div>;
};
