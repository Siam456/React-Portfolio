import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { LinearProgress } from '@material-ui/core';

const data = [
    {
        Name: 'Java',
        icon: 'fab fa-java',
        value: 70
    },

    {
        Name: 'JavaScript',
        icon: "fab fa-js-square",
        value: 80
    },

    {
        Name: 'React',
        icon: "fab fa-react",
        value: 70
    },

    {
        Name: 'HTML, CSS',
        icon: "fab fa-html5",
        value: 97
    },

    {
        Name: 'Bootstrap',
        icon: "fab fa-bootstrap",
        value: 90
    },

    {
        Name: 'MySQL',
        icon: "fas fa-database",
        value: 90
    },

    {
        Name: 'Python',
        icon: "fab fa-python",
        value: 50
    },

    {
        Name: 'Git',
        icon: "fab fa-git-alt",
        value: 60
    },

    {
        Name: 'UI/UX',
        icon: "fas fa-pencil-alt",
        value: 70
    }
]



const Work = () => {
    const [dataHook, setdataHook] = useState(data) 
    return (
        <div id='work'>
            <div className='fau'></div>
            <h1 style={{color: 'white', padding: '20px', textAlign: 'center'}}>Technology Stacks</h1>
            
            <div className='w-contain'>
                <Grid container>
                    {dataHook.map((v, i) => {
                        return <div className='card'>
                            <Grid item lg={3} sm={6} xs={12}>
                            <i class={v.icon}></i>
                            <h1>{v.Name}</h1>
                            <br></br>
                            
                            <div>
                            <LinearProgress variant='determinate' value={v.value} max={100}></LinearProgress>
                            <p style={{color: 'white'}}>{v.value}%</p>
                            </div>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABOCAYAAACHQYBnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MkExRjAyMTY1ODhFMzExQTU1MjgxNUU0OTYwNTA3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNUQzMThFOTU5QzQxMUU5QTc0NUJCMzFGMUVBMjBCQyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNUQzMThFODU5QzQxMUU5QTc0NUJCMzFGMUVBMjBCQyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNzU0OGExZi0xM2JlLTY5NDQtOGFmZS04NWE5NTEwNDhhODMiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkNTk3NzI3Yy1kODAzLWU5NDctYTYwOS1kYTcyMjZmOGM1ZWEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5KndFYAAADjElEQVR42uycz0tUURTH7yv7hRhi2aKypoIUyiRaSoQW1UQUtLAg2rVqVyQEbYxWEdQfkBDUIjCQiGAKjKiWEVEWFFFNkVHZD1HHtJqm7+GdYZ6PGZp3nGIavwe+13sf+uXOxzmXd8/cN15mu5vekcjkvx739qHdBo1B56ocIx+kGNpdOpoDHZxBKnmjJjSuJqj88Qx6Fxjf8rhGFVyj5qJthkahp1yjCgMcR3svO2TqFRkERVAERVAERVAExSAogiIogvqPohI3xR60CYpB/dB9k0vca1AfqR7cqERQO6D92t8KnYYeRIQ0H20XNE+vNFVi6q0NjZsNHisDkCTWVCKoN6Fx0uAxAP0KjN9WYur16tq7AnoE3Y3skMgMIv3OaurKGtXDUnChUjBvD3gfRVAERVAERVAMgiIogiIogqr4KMfqwQL9+XkKHnKccCH0HkqbHOKeVEoXQd+wcR4uN1AHZIrZfT100eCxCjoGVUOfoBORofuQjkLrndSl4t6Fckq92gAkp/1ag89OheT0XbXZ4NGokLLLUwfXqOIiU06ghjTdXCD1hgw+16CU9iX1bho85LBr9gMJKQlfLscK579dzAsfdp20mLMUzFIwbzgJiqAIiqAYBEVQBEVQBEVQ0zZKVeGUnbY81d0CvYJ6oAmDz2pot/avQM+NlYMO5x8kewhdhTKRXeLeBhc4SFYqUBuhvdpvgn5ClyJ6zII6Xa46KdAOQT8i+uxxuUqpzOUrdCcipHq0hwMZt7hUqRcLjRsMHnUBSE77dQaf5X+YWzGxJLQsLS0VqP7Q+LHBYxD6GBh/0GtTnUu/weOlk4JdLp6UsnAnOS1HlZPQbdO64Fc3t2i/z9mqnNEO5BeucE46kM8KJyucvI8iKIIiKIJiEBRBERRBERRBTduo0t22HMWr0d32uNGrTn3kmd4Bo8dMaJ325THXtNFH6knLnH8g7IvJIfdlgCPiI6DkgGm2hiAv8Dj0PaKtFMu6nF+Gle34GWf7voHOACgp454yeEi554i+ASZ0Xq8jQpqN9qQCl7guqdcW+k80GibXqpCcTrDd4FEfgCTRoteiRrvOwemcWg0ejQFIEm0CKhX6pRGDcfhvhg0eqVCqpfPMrZgY/guvJyWgup1fgJe3qXxikTQY92mqyIt74fxH6qOGfHnxeedXFEe1P2bw6dU5pHVOfZEdEpmksphQNt2/BRgAEnW7OTzgnrkAAAAASUVORK5CYII=" alt="dot" class="color-dot"></img>
                            
                            </Grid>   
                        </div>
                        
                    })}
                
                </Grid>
            </div>
        </div>
    );
};

export default Work;