import { Container, CssBaseline, Grid2 as Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import * as TextSearchEngine from 'text-search-engine'
import ListSearch from '../../components/ListSearch'
import TextHighlight from '../../components/TextHighlight'
import { LONG_TEXT } from '../../config/data'

window._TEXT_SEARCH_ENGINE_ = TextSearchEngine

export default function Home() {
	const [listItems, setListItems] = useState<string[]>([])
	const longText = LONG_TEXT
	useEffect(() => {
		const items: string[] = []
		for (let i = 1; i < 101; i++) {
			const str = `item ${i}`
			items.push(str)
		}
		setListItems([...items])
	}, [])
	return (
		<div>
			<CssBaseline />
			<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
				<Container maxWidth='lg' sx={{ mt: 4, mb: 4, flex: 1 }}>
					<Grid container spacing={3}>
						<Grid
							size={{ xs: 12, md: 6 }}
							sx={(theme) => ({
								[theme.breakpoints.down('sm')]: {
									maxHeight: '60vh',
									overflow: 'auto',
								},
							})}
						>
							<ListSearch list={listItems} setList={setListItems} />
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<TextHighlight highlightedText={longText} />
						</Grid>
					</Grid>
				</Container>
			</div>
		</div>
	)
}