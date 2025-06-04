from PIL import Image, ImageDraw, ImageFont
import os
import colorsys

def create_directory():
    if not os.path.exists('images'):
        os.makedirs('images')

def get_font(size=40):
    # 尝试使用系统中文字体
    try:
        # Windows 系统
        if os.name == 'nt':
            font_path = "C:/Windows/Fonts/simhei.ttf"  # 黑体
            if not os.path.exists(font_path):
                font_path = "C:/Windows/Fonts/msyh.ttc"  # 微软雅黑
        # Linux 系统
        else:
            font_path = "/usr/share/fonts/truetype/droid/DroidSansFallbackFull.ttf"
            if not os.path.exists(font_path):
                font_path = "/usr/share/fonts/truetype/wqy/wqy-microhei.ttc"
        
        return ImageFont.truetype(font_path, size)
    except:
        # 如果找不到中文字体，使用默认字体
        return ImageFont.load_default()

def create_gradient_background(width, height, start_color, end_color):
    # 创建渐变背景
    image = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(image)
    
    for y in range(height):
        # 计算当前行的颜色
        r = start_color[0] + (end_color[0] - start_color[0]) * y / height
        g = start_color[1] + (end_color[1] - start_color[1]) * y / height
        b = start_color[2] + (end_color[2] - start_color[2]) * y / height
        color = (int(r), int(g), int(b))
        draw.line([(0, y), (width, y)], fill=color)
    
    return image

def create_course_image(number, title):
    # 创建一个 800x400 的图片
    width, height = 800, 400
    
    # 创建渐变背景
    start_color = (41, 128, 185)  # 深蓝色
    end_color = (52, 152, 219)    # 浅蓝色
    img = create_gradient_background(width, height, start_color, end_color)
    d = ImageDraw.Draw(img)
    
    # 获取字体
    title_font = get_font(60)  # 更大的标题字体
    subtitle_font = get_font(40)  # 副标题字体
    
    # 添加标题
    d.text((width/2, height/2 - 30), f"课程 {number}", fill='white', anchor="mm", font=subtitle_font)
    d.text((width/2, height/2 + 40), title, fill='white', anchor="mm", font=title_font)
    
    # 添加装饰线
    line_y = height/2 + 80
    d.line([(width/2 - 100, line_y), (width/2 + 100, line_y)], fill='white', width=2)
    
    # 保存图片
    img.save(f'images/course{number}.jpg', quality=95)

def create_teacher_image(number, name):
    # 创建一个 400x400 的圆形图片
    img = Image.new('RGB', (400, 400), color='white')
    d = ImageDraw.Draw(img)
    
    # 绘制圆形
    d.ellipse([50, 50, 350, 350], fill='lightblue')
    
    # 获取字体
    font = get_font(30)
    
    # 添加名字
    d.text((200, 200), name, fill='black', anchor="mm", font=font)
    
    # 保存图片
    img.save(f'images/teacher{number}.jpg', quality=95)

def main():
    create_directory()
    
    # 创建课程图片
    courses = [
        "Bootstrap 5 基础入门",
        "响应式布局实战",
        "组件开发进阶"
    ]
    
    for i, title in enumerate(courses, 1):
        create_course_image(i, title)
    
    # 创建教师图片
    teachers = ["张教授", "李老师", "王工程师"]
    
    for i, name in enumerate(teachers, 1):
        create_teacher_image(i, name)

if __name__ == "__main__":
    main() 