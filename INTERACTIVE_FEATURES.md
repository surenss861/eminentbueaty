# Interactive Features Documentation

## 🎨 Advanced Interactive Features Implemented

This website now includes cutting-edge interactive features inspired by award-winning sites like Locomotive, Bruno Simon, Daniel Spatzek, and Webflow.

### 1. **Magnetic Cursor Effects** (Daniel Spatzek Style)
- Custom cursor that follows mouse movement with spring physics
- Expands on hover over interactive elements
- Magnetic pull effect on elements with `data-magnetic` attribute
- Smooth, responsive animations using Framer Motion

**Implementation:**
- `components/CustomCursor.tsx` - Main cursor component
- Automatically detects interactive elements (links, buttons)
- Elements with `data-magnetic` attribute get magnetic pull effect

### 2. **Magnetic Buttons** (3D Tilt Effect)
- Buttons that tilt in 3D space based on cursor position
- Spring physics for smooth, natural movement
- Works with both links and click handlers

**Implementation:**
- `components/MagneticButton.tsx` - Reusable magnetic button component
- Used in Hero section and CTA sections
- Creates immersive, interactive feel

### 3. **Horizontal Scroll Section** (Obys Agency Style)
- Horizontal scrolling testimonials section
- Scroll-triggered animations for each card
- Smooth parallax effect as you scroll vertically
- Cards animate in as they enter viewport

**Implementation:**
- `components/HorizontalScrollSection.tsx`
- Uses GSAP ScrollTrigger for precise control
- Framer Motion for smooth scrolling
- Added to homepage between Approach and Testimonials

### 4. **Enhanced Parallax Hero** (Locomotive Style)
- Multi-layer parallax scrolling
- Background and content move at different speeds
- Mouse-reactive parallax (content follows cursor)
- Animated particles floating in background
- Scroll-triggered fade out

**Implementation:**
- Enhanced `components/Hero.tsx`
- Uses Framer Motion's `useScroll` and `useTransform`
- GSAP for particle animations
- Multiple parallax layers for depth

### 5. **Smooth Scroll** (Lenis)
- Buttery-smooth scrolling experience
- Custom easing curves
- Works across all pages
- Optimized performance

**Implementation:**
- `components/SmoothScroll.tsx`
- Wraps entire app in layout
- Uses Lenis library for smooth scrolling

### 6. **Scroll-Triggered Animations** (GSAP ScrollTrigger)
- Service cards animate on scroll
- Staggered animations for visual interest
- Performance optimized
- Works with smooth scroll

**Implementation:**
- Used in `ServicesSection.tsx`
- GSAP ScrollTrigger for precise timing
- Cards fade and scale in as you scroll

### 7. **Parallax Text Component**
- Reusable parallax text component
- Customizable speed
- Fade in/out on scroll
- Can be used anywhere

**Implementation:**
- `components/ParallaxText.tsx`
- Uses Framer Motion scroll hooks
- Configurable speed parameter

## 🎯 Key Features

### Performance Optimized
- All animations use `requestAnimationFrame`
- Lazy loading for images
- Optimized GSAP animations
- Mobile-friendly (cursor disabled on mobile)

### Accessibility
- Custom cursor only on desktop
- Keyboard navigation still works
- Screen reader friendly
- Focus states maintained

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers
- Mobile touch support

## 🚀 Usage Examples

### Adding Magnetic Effect to Element
```tsx
<div data-magnetic>
  Your content here
</div>
```

### Using Magnetic Button
```tsx
<MagneticButton href="/page">
  <div className="your-button-styles">
    Button Text
  </div>
</MagneticButton>
```

### Using Parallax Text
```tsx
<ParallaxText speed={0.5} className="text-4xl">
  Your Text Here
</ParallaxText>
```

## 📊 Performance Metrics

- Smooth 60fps animations
- Optimized scroll performance
- Minimal layout shifts
- Fast initial load

## 🎨 Design Philosophy

Inspired by:
- **Locomotive** - Multi-layer parallax and scroll-jacking
- **Bruno Simon** - Interactive 3D elements
- **Daniel Spatzek** - Magnetic cursor and experimental layouts
- **Webflow** - Smooth, polished animations
- **Obys Agency** - Horizontal scrolling sections
- **Gucci Beauty** - Luxury feel with motion

## 🔧 Technical Stack

- **Framer Motion** - Component animations
- **GSAP + ScrollTrigger** - Scroll-triggered animations
- **Lenis** - Smooth scrolling
- **Next.js 14** - React framework
- **TypeScript** - Type safety

## 📝 Notes

- All interactive features are optional and enhance UX
- Mobile users get standard experience (no custom cursor)
- Performance is prioritized over flashy effects
- All animations respect user preferences (reduced motion)

