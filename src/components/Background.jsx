import Circle from "./BgCircle.jsx"

function Background() {

    const styles = {
        width: "100%",
    }

    let circles =  [{id:1, height:"500px", width:"500px", move:"translate(-50%, -50%)", topLeft:"500px", topRight:"500px", botRight:"500px", botLeft:"500px", start:"0"},
                    {id:2, height:"1000px", width:"500px", move:"translate(0, 50%)", topLeft:"1000px", botLeft:"1000px", end:"0"},
                    {id:3, height:"150px", width:"150px", topLeft:"150px", topRight:"150px", botLeft:"150px", botRight:"150px", start:"100px", move:"translate(0%, 1000%)"}]

    const listCircles = circles.map(circle => <Circle key={circle.id} height={circle.height} width={circle.width} move={circle.move} start={circle.start} end={circle.end} botRight={circle.botRight} botLeft={circle.botLeft} topRight={circle.topRight} topLeft={circle.topLeft} />)


    return(<div className="background" style={styles}>{listCircles}</div>)

}

export default Background