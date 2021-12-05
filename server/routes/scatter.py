import sys
import numpy as np
import matplotlib.pyplot as plt
import base64
import io

def test1(coordinateList): 
    np.random.seed(19680801)
    N = 50
    x = np.random.rand(N)
    y = np.random.rand(N)
    m, b = np.polyfit(x, y, 1)

    plt.scatter(x, y, marker='.', alpha=0.5)
    plt.plot(x, m*x + b)
    plt.savefig('public/images/scatter.png', bbox_inches='tight')

if __name__ == '__main__':
    test1(sys.argv[1])