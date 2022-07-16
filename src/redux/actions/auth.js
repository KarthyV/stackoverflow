import { firebase } from "../../firebase";

export const loginWithGoogle = () => async (dispatch) => {
  try {
    dispatch({ type: "GOOGLE_AUTH_REQUEST" });
    const provider = new firebase.auth.GoogleAuthProvider();

    const res = await firebase.auth().signInWithPopup(provider);

    const accessToken = res.credential.accessToken;
    const profile = {
      name: res.additionalUserInfo.profile.name,
      picture: res.additionalUserInfo.profile.picture,
    };
    const currentUser = {
      name: res.additionalUserInfo.profile.name,
      picture: res.additionalUserInfo.profile.picture,
      email: res.additionalUserInfo.profile.email,
    };

    sessionStorage.setItem("sof-access-token", accessToken);
    sessionStorage.setItem("sof-user", JSON.stringify(profile));

    dispatch({
      type: "GOOGLE_AUTH_SUCCESS",
      payload: {
        accessToken: accessToken,
        profile: profile,
      },
    });

    dispatch({
      type: "USER_DETAILS_SUCCESS",
      payload: currentUser,
    });
  } catch (error) {
    dispatch({ type: "GOOGLE_AUTH_FAIL", payload: error });
  }
};

export const loginWithFaceBook = () => async (dispatch) => {
  try {
    dispatch({ type: "FACEBOOK_AUTH_REQUEST" });
    const provider = new firebase.auth.FacebookAuthProvider();
    const res = await firebase.auth().signInWithPopup(provider);

    const accessToken = res.credential.accessToken;
    const profile = {
      name: res.additionalUserInfo.profile.name,
      picture: res.additionalUserInfo.profile.picture.data.url,
    };

    sessionStorage.setItem("sof-access-token", accessToken);
    sessionStorage.setItem("sof-user", profile);
    dispatch({
      type: "FACEBOOK_AUTH_SUCCESS",
      payload: {
        accessToken: accessToken,
        profile: profile,
      },
    });
    const currentUser = {
      name: res.additionalUserInfo.profile.name,
      picture: res.additionalUserInfo.profile.picture.data.url,
      email: res.additionalUserInfo.profile.email,
    };
    dispatch({
      type: "USER_DETAILS_SUCCESS",
      payload: currentUser,
    });
  } catch (error) {
    dispatch({ type: "FACEBOOK_AUTH_FAIL", payload: error });
  }
};

export const loginWithGitHub = () => async (dispatch) => {
  try {
    dispatch({ type: "GITHUB_AUTH_REQUEST" });
    const provider = new firebase.auth.GithubAuthProvider();
    const res = await firebase.auth().signInWithPopup(provider);

    const accessToken = res.credential.accessToken;
    const profile = {
      name: res.additionalUserInfo.username,
      picture: res.additionalUserInfo.profile.avatar_url,
    };

    sessionStorage.setItem("sof-access-token", accessToken);
    sessionStorage.setItem("sof-user", profile);
    dispatch({
      type: "GITHUB_AUTH_SUCCESS",
      payload: {
        accessToken: accessToken,
        profile: profile,
      },
    });

    const currentUser = {
      name: res.additionalUserInfo.username,
      picture: res.additionalUserInfo.profile.avatar_url,
      email: res.user.multiFactor.user.email,
    };
    dispatch({
      type: "USER_DETAILS_SUCCESS",
      payload: currentUser,
    });
  } catch (error) {
    dispatch({ type: "GITHUB_AUTH_FAIL", payload: error });
  }
};

export const logOut = () => async (dispatch) => {
  try {
    await firebase.auth().signOut();

    dispatch({ type: "LOGOUT" });

    sessionStorage.clear();
  } catch (error) {
    console.log(error);
  }
};
