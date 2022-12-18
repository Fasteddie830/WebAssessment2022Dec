import "../style/style.css"

//This file is being used as an extra visual component at the top of the page
// + this file contains the navigation bar <nav> section. 

export default function HTMLComponents() {
    return (
        <>
            <header>
                <h2 id="logo">
                    {/* <a>
                        <img src="https://media.istockphoto.com/id/1020628062/vector/whiskered-chef-clip-art.jpg?b=1&s=612x612&w=0&k=20&c=5N_g-p9QbghyzTqBOOUpPI6-3EVrCngXy-VtDF-G6E4=" alt="" id="logo" />
                    </a> */}
                    Logo
                </h2>
                <nav>
                    <ul>
                        <li><a href="#top">Top</a></li>
                        <li><a href="#snap">Menu</a></li>
                        <li><a href="#bookmarks">Bookmarks</a></li>
                        <li><a href="#footer">ShopList</a></li>
                    </ul>
                </nav>
            </header>
            <div id="top">
                <h1>Dan's Kitchen</h1>
                <h3>FEWD Assessment, BSc Computing Year 4</h3>
                <h3 id="bottomh3">CookBook App</h3>
                <p id="snap"></p>
            </div>
           
        </>
    )

}