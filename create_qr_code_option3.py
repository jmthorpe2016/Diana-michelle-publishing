from PIL import Image, ImageDraw, ImageFont
import os

# Create image with blue-desert blend gradient
width, height = 800, 800
image = Image.new('RGB', (width, height), 'white')
draw = ImageDraw.Draw(image)

# Create blue-desert blend gradient (Option 3)
for y in range(height):
    # Calculate gradient position (0 to 1)
    ratio = y / height
    
    if ratio < 0.3:
        # Blue section (0-30%)
        r = int(37 + (91 - 37) * (ratio / 0.3))
        g = int(99 + (143 - 99) * (ratio / 0.3))
        b = int(235 + (201 - 235) * (ratio / 0.3))
    elif ratio < 0.7:
        # Transition to desert (30-70%)
        transition = (ratio - 0.3) / 0.4
        r = int(91 + (212 - 91) * transition)
        g = int(143 + (184 - 143) * transition)
        b = int(201 + (150 - 201) * transition)
    else:
        # Desert section (70-100%)
        transition = (ratio - 0.7) / 0.3
        r = int(212 + (232 - 212) * transition)
        g = int(184 + (213 - 184) * transition)
        b = int(150 + (183 - 150) * transition)
    
    draw.line([(0, y), (width, y)], fill=(r, g, b))

# Create white rounded rectangle for QR code area
qr_size = 500
qr_x = (width - qr_size) // 2
qr_y = (height - qr_size) // 2 - 50

# Draw white rounded rectangle with shadow
shadow_offset = 8
shadow_color = (0, 0, 0, 40)

# Create shadow layer
shadow = Image.new('RGBA', (width, height), (0, 0, 0, 0))
shadow_draw = ImageDraw.Draw(shadow)
shadow_draw.rounded_rectangle(
    [qr_x + shadow_offset, qr_y + shadow_offset, 
     qr_x + qr_size + shadow_offset, qr_y + qr_size + shadow_offset],
    radius=30,
    fill=(0, 0, 0, 40)
)

# Blur shadow (simple approximation)
image_rgba = image.convert('RGBA')
image_rgba = Image.alpha_composite(image_rgba, shadow)
image = image_rgba.convert('RGB')

# Draw white QR code container
draw = ImageDraw.Draw(image)
draw.rounded_rectangle(
    [qr_x, qr_y, qr_x + qr_size, qr_y + qr_size],
    radius=30,
    fill='white'
)

# Add placeholder text for QR code
try:
    # Try to use a nice font
    font_large = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 60)
    font_small = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 30)
except:
    # Fallback to default font
    font_large = ImageFont.load_default()
    font_small = ImageFont.load_default()

# Draw QR code placeholder
qr_placeholder_size = 350
qr_placeholder_x = (width - qr_placeholder_size) // 2
qr_placeholder_y = qr_y + 50

# Draw grid pattern to simulate QR code
cell_size = 10
for i in range(0, qr_placeholder_size, cell_size):
    for j in range(0, qr_placeholder_size, cell_size):
        # Random-ish pattern
        if (i + j) % 30 < 15 or (i * j) % 40 < 20:
            draw.rectangle(
                [qr_placeholder_x + i, qr_placeholder_y + j,
                 qr_placeholder_x + i + cell_size - 2, qr_placeholder_y + j + cell_size - 2],
                fill='black'
            )

# Add text below QR code
text = "Scan the QR code or use the form below to give"
text_bbox = draw.textbbox((0, 0), text, font=font_small)
text_width = text_bbox[2] - text_bbox[0]
text_x = (width - text_width) // 2
text_y = qr_y + qr_size + 40

# Draw text with white background for visibility
draw.text((text_x, text_y), text, fill='white', font=font_small)

# Add top text
top_text = "DESERT BOY MINISTRIES OF JESUS"
top_bbox = draw.textbbox((0, 0), top_text, font=font_small)
top_width = top_bbox[2] - top_bbox[0]
top_x = (width - top_width) // 2
top_y = 60

draw.text((top_x, top_y), top_text, fill='white', font=font_small)

# Save the image
output_path = 'qr-code-blue-desert-blend.png'
image.save(output_path, 'PNG', quality=95)
print(f"✅ QR code image created: {output_path}")
print(f"📐 Size: {width}x{height}px")
print(f"🎨 Style: Blue-Desert Blend Gradient (Option 3)")
