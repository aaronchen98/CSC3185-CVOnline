import torch
import torchvision
import torchvision.transforms as transforms
import torchvision.models as models
import numpy as np
from PIL import Image
import matplotlib.pyplot as plt
import sys
import urllib.request
# from io import cStringIO
import io

# url = 'https://res.cloudinary.com/candicelin/image/upload/v1607795113/sample.jpg'
# url = 'https://res.cloudinary.com/candicelin/image/upload/v1607797724/timg-2_puhqmo.jpg'
# url = sys.argv[1]
# image_path = io.BytesIO(urllib.request.urlopen(url).read())
# image_path = sys.argv[1]
image_path = './uploads/classification/target.jpg'
label_path = './py/imagenet_classes.txt'


import os
os.environ['KMP_DUPLICATE_LIB_OK']='True'

transform = transforms.Compose([            #[1]
	 transforms.Resize(256),                    #[2]
	 # transforms.CenterCrop(224),                #[3]
	 transforms.ToTensor(),                     #[4]
	 transforms.Normalize(                      #[5]
	 mean=[0.485, 0.456, 0.406],                #[6]
	 std=[0.229, 0.224, 0.225]                  #[7]
 )])


# models
# ['AlexNet',
#  'DenseNet',
#  'GoogLeNet',
#  'Inception3',
#  'MobileNetV2',
#  'ResNet',
#  'ShuffleNetV2',
#  'SqueezeNet',
#  'VGG',
# ...
#  'alexnet',
#  'densenet',
#  'densenet121',
#  'densenet161',
#  'densenet169',
#  'densenet201',
#  'detection',
#  'googlenet',
#  'inception',
#  'inception_v3',
# ...
# ]

model = models.mobilenet_v2(pretrained=True)
img = Image.open(image_path)
img_t = transform(img)
batch_t = torch.unsqueeze(img_t, 0)
model.eval()
out = model(batch_t)
# print(out.shape)

with open(label_path) as f:
	classes = [line.strip() for line in f.readlines()]

_, index = torch.max(out, 1)
percentage = torch.nn.functional.softmax(out, dim=1)[0] * 100
print(classes[index[0]], percentage[index[0]].item())  
_, indices = torch.sort(out, descending=True)
top_5 = [(classes[idx], percentage[idx].item()) for idx in indices[0][:5]] 
print(top_5)

name = [i[0] for i in top_5]
num = [i[1] for i in top_5]
# name_list = ['Monday','Tuesday','Friday','Sunday']
# num_list = [1.5,0.6,7.8,6]
plt.barh(range(len(num)), num,tick_label = name)
# plt.show()
plt.savefig('py/output/classification.png', bbox_inches='tight')



