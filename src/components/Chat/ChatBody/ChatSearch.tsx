import HRLineBreak from "../SubComponents/HRLineBreak";
import { faLink, faRecycle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../../app/globals.css"
import { RecycleSVG } from "../SVG";

const ChatSearch = () => {
	return (
		<>
			{/* search button */}
			<div className="flex items-center gap-3">
				<button className="bg-secondary-background w-full border-1 rounded-lg py-2 pl-2 mb-2 focus:outline-0 cursor-text flex items-center">
					<FontAwesomeIcon
						icon={faSearch}
						className="text-md w-12 text-icon pr-4 pl-2 cursor-pointer"
					/>
					<input
						type="text"
						className="bg-secondary-background w-full focus:outline-0 cursor-text"
						placeholder="Search a chat or begin a new one..."
					/>
				</button>

				{/* filter not read */}
				<svg
					className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv w-7 icon-color"
					focusable="false"
					aria-hidden="true"
					viewBox="0 0 24 24"
					data-testid="FilterListRoundedIcon"
				>
					<path d="M11 18h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm4 6h10c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1z"></path>
				</svg>
			</div>
			<div className="py-3 flex items-center gap-7">
				<RecycleSVG/>
				<span className="text-white text-lg">Archived</span>
			</div>
			<HRLineBreak />
		</>
	);
};

export default ChatSearch;
