import Header from './Header'

const layoutStyle = {
 margin: 20,
  padding: 20
}

const writingAreaStyle = {
  backgroundColor: "#FFFFFF",
  height: '100%',
  minHeight:'20em',
    padding: '20px',
	marginTop: '20px',
   borderRadius: '15px'
}

const Layout = (props) => (
		  <div style={layoutStyle}>
			<Header />
			 <article style={writingAreaStyle}>
			{props.children}
			</article>

			  <style jsx global>{`
		  body {
 background: #ba5370; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #ba5370, #f4e2d8); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #ba5370, #f4e2d8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

		  `}
				</style>
		  </div>
		  
		 
		  
)

export default Layout