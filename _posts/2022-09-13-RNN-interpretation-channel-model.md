---
layout: post
title: "RNN based channel model with self-attention as interpretation module"
background: '/img/pages/simon.jpg'
---

<p>For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.</p>

## RNN(GRU) Architecture

![img](https://stanford.edu/~shervine/teaching/cs-230/illustrations/architecture-rnn-ltr.png?9ea4417fc145b9346a3e288801dbdfdc)



In our reseach project, $$x^{<t>}$$ stands for the i-th bit in block. For each bit at position $$t$$ , the activation 

 $$a^{<t>}$$ updated as $$a^{\langle t\rangle}=g_1\left(W_{a a} a^{<t-1\rangle}+W_{a x} x^{<t\rangle}+b_a\right)$$ and  $$y^{<t>}$$ updated as $$y^{<t>}=g_2\left(W_{y a} a^{<t>}+b_y\right)$$ , where $$W_{a x}, W_{a a}, W_{y a}, b_a, b_y$$ are coefficients shared temporally.



### Loss funciton of RNN

$$
\mathcal{L}(\widehat{y}, y)=\sum_{t=1}^{T_y} \mathcal{L}\left(\widehat{y}^{<t>}, y^{<t>}\right)
$$

### Backpropagation through time

$$
\frac{\partial \mathcal{L}^{(T)}}{\partial W}=\left.\sum_{t=1}^T \frac{\partial \mathcal{L}^{(T)}}{\partial W}\right|_{(t)}
$$

Backpropagation is done at each point in time. At timestep $T$, the derivative of the loss $\mathcal{L}$ with respect to weight matrix $W$ is expressed as above.

### Bidirectional RNN

<img src="https://stanford.edu/~shervine/teaching/cs-230/illustrations/bidirectional-rnn-ltr.png?e3e66fae56ea500924825017917b464a" alt="img" style="zoom:50%;" />



### Self-attention RNN









<p>As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.</p>

<img class="img-fluid" src="https://source.unsplash.com/Mn9Fa_wQH-M/800x450" alt="Demo Image">
<span class="caption text-muted">To go places and do things that have never been done before – that’s what living is all about.</span>

<p>Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.</p>

<p>As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s a fundamental truth to our nature, Man must explore, and this is exploration at its greatest.</p>

<p>Placeholder text by <a href="http://spaceipsum.com/">Space Ipsum</a>. Photographs by <a href="https://unsplash.com/">Unsplash</a>.</p>
