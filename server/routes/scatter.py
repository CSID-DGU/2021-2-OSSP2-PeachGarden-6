import sys
import numpy as np
import matplotlib.pyplot as plt
import json
import sys

def scatter(args):
    data = json.loads(args)
    coordinateList = data['coordinateList']
    markerList = json.loads(data['markerList'])
    x = np.array(coordinateList['x'])
    y = np.array(coordinateList['y'])
    m, b = np.polyfit(x, y, 1)

    xTarget = np.array(markerList['x'])
    yTarget = np.array(markerList['y'])

    plt.scatter(x, y, marker='.', alpha=0.5, c='black')
    plt.scatter(xTarget[0], yTarget[0], c='blue', marker='X')
    plt.scatter(xTarget[1], yTarget[1], c='orange', marker='X')
    if xTarget.size == 3:
        plt.scatter(xTarget[2], yTarget[2], c='green', marker='X')
    plt.plot(x, m*x + b, c='red')
    plt.savefig('public/images/scatter.png', bbox_inches='tight')
    sys.exit()

if __name__ == '__main__':
    scatter(sys.argv[1])