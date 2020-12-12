import torch
import torchvision
import torchvision.transforms as transforms
import torchvision.models as models
import numpy as np
from PIL import Image

image_path = './dog.jpeg'


net = models.detection.fasterrcnn_resnet50_fpn(pretrained=True)

img = Image.open(image_path)

transform = transforms.Compose([            #[1]
	transforms.Resize(256),                    #[2]
	transforms.CenterCrop(224),                #[3]
	transforms.ToTensor(),                     #[4]
	transforms.Normalize(                      #[5]
	mean=[0.485, 0.456, 0.406],                #[6]
	std=[0.229, 0.224, 0.225]                  #[7]
 )])

# img_t = transform(img)
# batch_t = torch.unsqueeze(img_t, 0)
# net.eval()
# out = net(batch_t)
# print(out)
names = {'0': 'background', '1': 'person', '2': 'bicycle', '3': 'car', '4': 'motorcycle', '5': 'airplane', '6': 'bus', '7': 'train', '8': 'truck', '9': 'boat', '10': 'traffic light', '11': 'fire hydrant', '13': 'stop sign', '14': 'parking meter', '15': 'bench', '16': 'bird', '17': 'cat', '18': 'dog', '19': 'horse', '20': 'sheep', '21': 'cow', '22': 'elephant', '23': 'bear', '24': 'zebra', '25': 'giraffe', '27': 'backpack', '28': 'umbrella', '31': 'handbag', '32': 'tie', '33': 'suitcase', '34': 'frisbee', '35': 'skis', '36': 'snowboard', '37': 'sports ball', '38': 'kite', '39': 'baseball bat', '40': 'baseball glove', '41': 'skateboard', '42': 'surfboard', '43': 'tennis racket', '44': 'bottle', '46': 'wine glass', '47': 'cup', '48': 'fork', '49': 'knife', '50': 'spoon', '51': 'bowl', '52': 'banana', '53': 'apple', '54': 'sandwich', '55': 'orange', '56': 'broccoli', '57': 'carrot', '58': 'hot dog', '59': 'pizza', '60': 'donut', '61': 'cake', '62': 'chair', '63': 'couch', '64': 'potted plant', '65': 'bed', '67': 'dining table', '70': 'toilet', '72': 'tv', '73': 'laptop', '74': 'mouse', '75': 'remote', '76': 'keyboard', '77': 'cell phone', '78': 'microwave', '79': 'oven', '80': 'toaster', '81': 'sink', '82': 'refrigerator', '84': 'book', '85': 'clock', '86': 'vase', '87': 'scissors', '88': 'teddybear', '89': 'hair drier', '90': 'toothbrush'}


import cv2
src_img = cv2.imread(image_path)
img = cv2.cvtColor(src_img, cv2.COLOR_BGR2RGB)
img_tensor = torch.from_numpy(img/255.).permute(2,0,1).float()
input = []
input.append(img_tensor)

net.eval()
out2 = net(input)
print(out2)

boxes = out2[0]['boxes']
labels = out2[0]['labels']
scores = out2[0]['scores']

for idx in range(boxes.shape[0]):
        if scores[idx] >= 0.85:
            x1, y1, x2, y2 = boxes[idx][0], boxes[idx][1], boxes[idx][2], boxes[idx][3]
            cv2.rectangle(src_img,(x1,y1),(x2,y2),(0,255,0),thickness=2)         
            name = names.get(str(labels[idx].item()))   
            cv2.putText(src_img, text=name, org=(x1, y1+10), fontFace=cv2.FONT_HERSHEY_SIMPLEX, 
                fontScale=0.5, thickness=1, lineType=cv2.LINE_AA, color=(0, 0, 255))
            # cv2.imshow('result',src_img)

cv2.imwrite('./output/detection.png', src_img)

# cv2.waitKey()
# cv2.destroyAllWindows()

