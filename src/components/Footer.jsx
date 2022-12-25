import { Box, Button } from "@mui/material";

export function Footer() {
	return (
		<Box sx={{ display: "flex", justifyContent: "center" }}>
			<Button href="https://ahmed.systems" color="success">
				© 2022 - ahmed.systems
			</Button>
		</Box>
	);
}