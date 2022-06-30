import "../../css/dialogs/LoaderDialog.css";
import Lottie from "react-lottie";
import animationData from "../../lotties/loading_anim.json";

export const LoaderDialog = ({ ...props }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  var dialog = (
    <div className="base-dialog">
      <div className="loaderdialog">
        <Lottie
          options={defaultOptions}
          className="loadinganimation"
          width={200}
          height={200}
        />
        <div className="loading-text">
          wait till we load the best of {props.aim} on the internet just for you
        </div>
      </div>
    </div>
  );

  if (!props.isLoadingDialogOpen) dialog = null;

  return <div>{dialog}</div>;
};
