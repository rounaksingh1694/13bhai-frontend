import logo from "./logo.svg";
import axios from "./axios";
import requests from "./requests";
import { instanceOf } from "prop-types";
import {
	withCookies,
	Cookies,
	useCookies,
	removeCookie,
	CookiesProvider,
} from "react-cookie";
import { useNavigate } from "react-router-dom";
import { React, useEffect, useState, Component } from "react";
import Router from "./Router";

function App() {
	return (
		// if()
		<CookiesProvider>
			<Router />
		</CookiesProvider>
	);
}

export default App;
