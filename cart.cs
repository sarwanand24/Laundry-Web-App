  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    
    html,body{
                background-color: black;
                overflow-x: hidden;
                scrollbar-width: none;
                width: 100%;
                height: 100%;
                position:absolute;
            }
    
    ::-webkit-scrollbar{
        display: none;
    }

    #back-arrow{
        color: white;
        font-size: 50px;
        font-weight: bolder;
       position: absolute;
       left: 5%;
    }

    h1{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        color: rgb(65, 170, 184);
        padding: 5%;
    }

    .text{
        color: yellow;
        text-align: center;
        font-size: 20px;
        font-family: cursive;
        font-weight: bold;
    }

    .services-list{
        font-size: 25px;
        font-family: cursive;
        font-weight: 800;
        color: white;
        margin-left: 5%;
        margin-top: 10%;
        margin-bottom: 10%;
    }

    #continue{
        font-size: 40px;
        text-align: center;
        font-family: cursive;
        font-weight: bold;
        color: rgb(65, 170, 184);
        padding: 15%;
    }

    .left-bot{
  clip-path: polygon(0% 25.5%, 100% 25.5%, 80.2% 50.25%, 100% 75%, 0% 74.75%);
  background-color: yellow;
  position: fixed;
  bottom: -6%;
  left: 0;
  width: 45%;
  height: 100px;
  z-index: 1000;
}

.right-bot{
  clip-path: polygon(0% 25.5%, 100% 25.5%, 100% 75%, 0% 74.75%, 19.7% 50.13%);
background-color: yellow;
position: fixed;
bottom: -6%;
right: 0;
width: 45%;
height: 100px;
z-index: 1000;
}

.bot1{
  z-index: 10000;
  color: rgb(0, 0, 0);
  font-size: 23px;
  font-weight:bold;
  font-family: 'Times New Roman', Times, serif;
  position: fixed;
  bottom: 1%;
  left: 2%;
}
.bot2{
  z-index: 10000;
  color: rgb(0, 0, 0);
  font-size: 23px;;
  font-weight:bold;
  font-family: 'Times New Roman', Times, serif;
  position: fixed;
  bottom: 1%;
  right: 1%;
}

#home{
  color: black;
  font-size: 35px;
  font-weight: bolder;
  background-color: rgb(83, 199, 199);
  border-radius: 60px;
  width: 50px;
  text-align: center;
  padding: 1%;
  position: fixed;
  bottom:-1%;
  left: 42.5%;
}

.services-list > span{
    width: 80px;
    height: 40px;
    position: absolute;
    right: 5%;
    border-radius: 15px;
    background-color: yellow;
}

.check{
    width: 80px;
    height: 40px;
   display: flex;
   justify-content: center;
   align-items: center;
    border-radius: 15px;
    border-style: none;
    opacity: 0;
    accent-color: yellow !important;
}

.check-toggle{
    opacity: 1;
}

/**************** MOBILE RESOLUTION ************/

@media only screen and (min-width:360px){
    #home{
        position: fixed;
        bottom: -1%;
        left: 43%;
    }
}

@media only screen and (min-width:412px){
    #home{
        width: 60px;
    font-size: 45px;
    position: fixed;
  bottom:0%;
  left: 43%; 
    }
    .right-bot{
    height: 130px;
    position: fixed;
    bottom:-4%;
  }
  .left-bot{
    height: 130px;
    position: fixed;
    bottom:-4%;
  }
  .bot1{
    position: fixed;
    bottom:1%;
    left: 1%;
    font-size: 30px;
  }
  .bot2{
    position: fixed;
    bottom:1%;
    right: 1%;
    font-size: 30px;
  }
  .services-list{
    margin-top: 15%;
    margin-bottom: 15%;
    font-size: 30px;
  }
  h1{
    font-size: 50px;
  }
  .text{
    font-size: 30px;
  }
}

/**************** TABLET RESOLUTION ************/

@media only screen and (min-width:768px){
    #back-arrow{
        font-size: 100px;
    }
    h1{
        font-size: 70px;
    }
    .services-list{
        font-size: 50px;
    }
    .right-bot{
    height: 160px;
    position: fixed;
    bottom:-4%;
  }
  .left-bot{
    height: 160px;
    position: fixed;
    bottom:-4%;
  }
  .bot1{
    position: fixed;
    bottom:1%;
    left: 1%;
    font-size: 50px;
  }
  .bot2{
    position: fixed;
    bottom:1%;
    right: 1%;
    font-size: 50px;
  }
  #home{
        width: 100px;
    font-size: 70px;
    position: fixed;
  bottom:0%;
  left: 43%; 
    }
} 
