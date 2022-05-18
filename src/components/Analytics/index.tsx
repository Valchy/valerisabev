import Script from 'next/script';

export default function Analytics() {
	return (
		<>
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			<Script async id="load-ga" src="https://www.googletagmanager.com/gtag/js?id=GTM-NW5VTN3" />
			<Script
				id="set-ga"
				dangerouslySetInnerHTML={{
					__html: "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'GTM-NW5VTN3', {page_path: window.location.pathname});",
				}}
			/>
		</>
	);
}
