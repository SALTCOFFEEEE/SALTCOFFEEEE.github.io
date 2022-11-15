---
layout: post
title: "RNN based channel model with self-attention as interpretation module"
background: '/img/pages/simon.jpg'
---


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

Self-attention was proposed by researchers at Google Research and Google Brain. It was proposed due to  challenges faced by encoder-decoder dealing with long sequences. 










