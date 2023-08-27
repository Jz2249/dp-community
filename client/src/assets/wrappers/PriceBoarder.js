import styled from 'styled-components'

const Wrapper = styled.aside`
 

@import url('https://fonts.googleapis.com/css2?family=Spicy+Rice&display=swap');

@b: #FFE0B5;
@c: #CA2E55;

@bg1: #301916;
@bg2: #462521;
@bg3: #8A6552;


html, body {
    min-height: 100%;
}


body {
    background: linear-gradient(to right, @bg1 0%, @bg1 5%, @bg3 5%, @bg3 10%, @bg2 10%, @bg2 15%, @bg1 15%, @bg1 20%, @bg2 20%, @bg2 25%, @bg3 25%, @bg3 30%, @bg1 30%, @bg1 35%, @bg3 35%, @bg3 40%, @bg2 40%, @bg2 45%, @bg1 45%, @bg1 50%, @bg3 50%, @bg3 55%, @bg2 55%, @bg2 60%, @bg1 60%, @bg1 65%, @bg3 65%, @bg3 70%, @bg1 70%, @bg1 75%, @bg2 75%, @bg2 80%, @bg1 80%, @bg1 85%, @bg3 85%, @bg3 90%, @bg2 90%, @bg2 95%, @bg1 95%, @bg1 100%);
    
    text-align: center;
}


@keyframes sway {
    0% {
        transform: rotate(0);
        animation-timing-function: ease-in-out;
    }
    10% {
        transform: rotate(-12deg);
        animation-timing-function: ease-in-out;
    }
    30% {
        transform: rotate(8deg);
        animation-timing-function: ease-in-out;
    }
    45% {
        transform: rotate(-4deg);
        animation-timing-function: ease-in-out;
    }
    60% {
        transform: rotate(2deg);
        animation-timing-function: ease-in-out;
    }
    70% {
        transform: rotate(-.1deg);
        animation-timing-function: ease-in-out;
    }
    75% {
        transform: rotate(.05deg);
        animation-timing-function: ease-in-out;
    }
    80% {
        transform: rotate(0);
        animation-timing-function: ease-in-out;
    }
    100% {
        transform: rotate(0);
    }
}


.example {
    position: relative;
    display: inline-block;
    font-family: 'Spicy Rice', cursive;
    line-height: 1;
    font-size: 64px;
    padding: 32px 32px;
    margin: 64px 0;
    animation: sway 5s linear infinite;
    transform-origin: 50% -32px;
    background: linear-gradient(to right, @c 0%, @c 100%),
                linear-gradient(to right, @c 0%, @c 100%),
                linear-gradient(to right, @c 0%, @c 100%),
                linear-gradient(to right, @c 0%, @c 100%),
        
                radial-gradient(circle at 100% 100%, @c 0%, @c 44%, #fff 46%, #fff 55%, @c 57%, @c 70%, transparent 72%, transparent 100%),
                radial-gradient(circle at 0 100%,    @c 0%, @c 44%, #fff 46%, #fff 55%, @c 57%, @c 70%, transparent 72%, transparent 100%),
                radial-gradient(circle at 0 0,       @c 0%, @c 44%, #fff 46%, #fff 55%, @c 57%, @c 70%, transparent 72%, transparent 100%),
                radial-gradient(circle at 100% 0,    @c 0%, @c 44%, #fff 46%, #fff 55%, @c 57%, @c 70%, transparent 72%, transparent 100%),

                linear-gradient(to top,    @c 0%, @c 63%, #fff 65%, #fff 78%, @c 80%, @c 100%),
                linear-gradient(to bottom, @c 0%, @c 63%, #fff 65%, #fff 78%, @c 80%, @c 100%),

                linear-gradient(to left,   @c 0%, @c 63%, #fff 65%, #fff 78%, @c 80%, @c 100%),
                linear-gradient(to left,   @c 0%, @c 63%, #fff 65%, #fff 78%, @c 80%, @c 100%),
                linear-gradient(to right,  @c 0%, @c 63%, #fff 65%, #fff 78%, @c 80%, @c 100%),
                linear-gradient(to right,  @c 0%, @c 63%, #fff 65%, #fff 78%, @c 80%, @c 100%),

                radial-gradient(circle at 0 50%,    transparent 0%, transparent 30%, @c 32%, @c 42%, #fff 44%, #fff 48%, @c 50%, @c 100%),
                radial-gradient(circle at 100% 50%, transparent 0%, transparent 30%, @c 32%, @c 42%, #fff 44%, #fff 48%, @c 50%, @c 100%),

                linear-gradient(to right, @c 0%, @c 100%);
    
    background-size: 3px 3px,
        3px 3px,
        3px 3px,
        3px 3px,
        
        16px 16px,
        16px 16px,
        16px 16px,
        16px 16px,
        
        ~'calc(100% - 32px + 4px)' 16px,
        ~'calc(100% - 32px + 4px)' 16px,
        
        16px ~'calc(50% - 32px)',
        16px ~'calc(50% - 32px)',
        16px ~'calc(50% - 32px)',
        16px ~'calc(50% - 32px)',
        
        32px 32px,
        32px 32px,
        
        ~'calc(100% - 32px + 4px)' ~'calc(100% - 32px)';
    
    background-position: 0 ~'calc(50% - 16px)',
        100% ~'calc(50% - 16px)',
        0 ~'calc(50% + 16px)',
        100% ~'calc(50% + 16px)',
        
        0 0,
        100% 0,
        100% 100%,
        0 100%,
        
        ~'calc(16px - 1px)' 0,
        ~'calc(16px - 1px)' 100%,
        
        0 16px,
        0 ~'calc(100% - 16px)',
        100% 16px,
        100% ~'calc(100% - 16px)',
        
        0 50%,
        100% 50%,
        
        ~'calc(16px - 1px)' 16px;
    
    background-repeat: no-repeat;
    
    &::before {
        content: '';
        height: 2px;
        width: 51%;
        position: absolute;
        top: -16px;
        left: 0;
        z-index: -1;
        transform: rotate(-15deg);
        background: linear-gradient(to right, transparent 0%, transparent 13%, @c 15%, #fff 17%, #fff 100%);
    }
    
    &::after {
        content: '';
        height: 2px;
        width: 51%;
        position: absolute;
        top: -16px;
        right: 0;
        z-index: -1;
        transform: rotate(15deg);
        background: linear-gradient(to left, transparent 0%, transparent 13%, @c 15%, #fff 17%, #fff 100%);
    }
}

`
export default Wrapper