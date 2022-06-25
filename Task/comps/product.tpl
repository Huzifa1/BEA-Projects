<div bind="products" class="fs0 ph70">
    <div class="c g_nm w25 md_w33 m_w50 m_m_w100 p10"  :for="products.results">
        
            <div class="w100 bgb20 roundt">
                <div class="ov cw fs10 w20 bgb80 p5" style="right: auto; height: 27px; border-radius: 0.25rem 0 0.25rem 0;color: yellow;">
                    0.0 <span class="fs12 mdi mdi-star"></span>
                </div>
                <div class="w100 p0 ph40 carouselSelector">
                    <div class="w100 g_nm" :for="images.untitled">
                        <div class="sq80">
                            <div class="ov con" style="background-image: url('{{dir}}{{image200x200}}');"></div>
                        </div>
                    </div>
                </div>
    
            </div>
            <div class="w100 c p10 bgb90 roundb">
                <div class="w100 fs16 cw l lh30">
                   <a href="/productinfo/{{objectId}}">{{Name}}</a> 
                </div>
                <div class="w100 fs12 cw l lh30">
                    ${{Price}}
                </div>
            </div>
        
    </div>
</div>

<script>
    setTimeout(() => {
        console.log("addedd")
        let opts = '{"cellAlign": "left", "freeScroll": false, "wrapAround": false, "prevNextButtons": true, "pageDots": false}';
        setTimeout(() => {
            $(".carouselSelector").show().flickity(JSON.parse(opts));
        }, 500);
    }, 1000);

</script>


<style>

    .flickity-prev-next-button {
        top: 50%;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        transform: translateY(-50%);
    }
    body{
        background-color: #333;
    }

</style>