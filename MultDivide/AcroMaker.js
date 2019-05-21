function motive(burr){ 
    var Mobbin, eastATL, Steady;
    Mobbin = burr.split(' ').toUpperase();
    eastATL= "";
    we = 0
        while (we<Mobbin.length) {
        Steady = Mobbin[we];
        eastATL = eastATL + Steady.charAt(0);
        we = we + 1 ;
        }
    return eastATL
        }
    var money = "W T F is up? It's Gucci Mane, the G";
    console.log(motive(money));
