// ============================================
// Gangotri Khadi - Complete JavaScript
// Routing, Navigation, and Interactivity
// ============================================

// ============================================
// 1. PAGE CONTENT & ROUTING
// ============================================

const pages = {
    home: `
        <!-- Navigation -->
        <nav>
            <div class="container">
                <a href="#" class="nav-brand" onclick="navigate('home'); return false;">Gangotri Khadi</a>
                <ul class="nav-links">
                    <li><a href="#" onclick="navigate('home'); return false;">Home</a></li>
                    <li><a href="#" onclick="navigate('about'); return false;">About</a></li>
                    <li><a href="#" onclick="navigate('products'); return false;">Products</a></li>
                    <li><a href="#" onclick="navigate('mission'); return false;">Mission</a></li>
                    <li><a href="#" onclick="navigate('donation'); return false;">Donate</a></li>
                    <li><a href="#" onclick="navigate('contact'); return false;">Contact</a></li>
                </ul>
                <button class="mobile-menu-btn" onclick="toggleMobileMenu()">☰</button>
            </div>
            <div id="mobile-menu">
                <a href="#" onclick="navigate('home'); return false;">Home</a>
                <a href="#" onclick="navigate('about'); return false;">About</a>
                <a href="#" onclick="navigate('products'); return false;">Products</a>
                <a href="#" onclick="navigate('mission'); return false;">Mission</a>
                <a href="#" onclick="navigate('donation'); return false;">Donate</a>
                <a href="#" onclick="navigate('contact'); return false;">Contact</a>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="hero" style="background-image: url('https://d2xsxph8kpxj0f.cloudfront.net/310519663328381985/Sm4y3PfDgry3e8EmwV23wn/hero-khadi-weaving-cwauiNa5hyo3ndhmkYYjY7.webp');">
            <div class="hero-content">
                <h1>Gangotri Khadi</h1>
                <p>Handmade Clothing Supporting Rural Artisans</p>
                <button class="btn btn-secondary" onclick="navigate('products'); return false;">Explore Products</button>
            </div>
        </section>

        <!-- Introduction Section -->
        <section class="section bg-cream">
            <div class="container">
                <div class="section-header">
                    <h2>About Gangotri Khadi</h2>
                    <div class="section-divider"></div>
                </div>
                <div style="max-width: 800px; margin: 0 auto;">
                    <p>Gangotri Khadi is a social initiative dedicated to promoting handmade khadi clothing while supporting rural artisans across India. We believe in the power of traditional craftsmanship and sustainable fashion to create positive social impact.</p>
                    <p>Every piece of clothing we offer is handwoven by skilled artisans using natural fibers and traditional techniques that have been passed down through generations. By choosing Gangotri Khadi, you're not just buying clothing—you're supporting livelihoods and preserving India's rich textile heritage.</p>
                </div>
            </div>
        </section>

        <!-- Why Handmade Khadi -->
        <section class="section bg-white">
            <div class="container">
                <div class="section-header">
                    <h2>Why Handmade Khadi?</h2>
                    <div class="section-divider"></div>
                </div>
                <div class="grid grid-3">
                    <div class="card" style="border-left: 4px solid var(--sage-600);">
                        <div class="card-body">
                            <h3 class="card-title">Sustainable Fashion</h3>
                            <p class="card-text">Handmade khadi uses natural fibers and traditional dyeing methods, creating clothing that's environmentally friendly and biodegradable.</p>
                        </div>
                    </div>
                    <div class="card" style="border-left: 4px solid var(--terracotta-600);">
                        <div class="card-body">
                            <h3 class="card-title">Support Artisans</h3>
                            <p class="card-text">Every purchase directly supports rural artisans and their families, helping preserve traditional livelihoods in communities across India.</p>
                        </div>
                    </div>
                    <div class="card" style="border-left: 4px solid var(--taupe-600);">
                        <div class="card-body">
                            <h3 class="card-title">Heritage Craftsmanship</h3>
                            <p class="card-text">Handwoven khadi represents centuries of Indian textile tradition. Each piece carries the skill and dedication of master craftspeople.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Featured Products -->
        <section class="section bg-cream">
            <div class="container">
                <div class="section-header">
                    <h2>Our Collections</h2>
                    <div class="section-divider"></div>
                </div>
                <div class="grid grid-4">
                    <div class="card">
                        <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663328381985/Sm4y3PfDgry3e8EmwV23wn/product-khadi-kurta-GZSHRvPUPpDAceMK976CQc.webp" alt="Khadi Kurta" class="card-image">
                        <div class="card-body">
                            <h3 class="card-title">Khadi Kurta</h3>
                            <p class="card-text">Handwoven with care</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663328381985/Sm4y3PfDgry3e8EmwV23wn/product-khadi-saree-hgWVK7PT2mzPZD6KjxFLm9.webp" alt="Khadi Saree" class="card-image">
                        <div class="card-body">
                            <h3 class="card-title">Khadi Saree</h3>
                            <p class="card-text">Handwoven with care</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663328381985/Sm4y3PfDgry3e8EmwV23wn/product-handmade-shirt-TcxfBE3wK6JW3fFQLQKKry.webp" alt="Handmade Shirt" class="card-image">
                        <div class="card-body">
                            <h3 class="card-title">Handmade Shirt</h3>
                            <p class="card-text">Handwoven with care</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663328381985/Sm4y3PfDgry3e8EmwV23wn/artisans-at-work-GbZDomyFPgmtJLd85Te6Zk.webp" alt="Traditional Clothing" class="card-image">
                        <div class="card-body">
                            <h3 class="card-title">Traditional Clothing</h3>
                            <p class="card-text">Handwoven with care</p>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-2xl">
                    <button class="btn btn-primary" onclick="navigate('products'); return false;">View All Products</button>
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="section bg-sage">
            <div class="container text-center" style="max-width: 600px;">
                <h2>Make a Difference</h2>
                <p>Support sustainable fashion and rural artisans. Every purchase makes an impact.</p>
                <div class="flex flex-col gap-md" style="margin-top: var(--spacing-lg);">
                    <button class="btn btn-secondary" onclick="navigate('products'); return false;">Shop Now</button>
                    <button class="btn btn-tertiary" onclick="navigate('donation'); return false;">Make a Donation</button>
                </div>
            </div>
        </section>

        ${renderFooter()}
    `,

    about: `
        ${renderNavigation()}
        
        <!-- Page Header -->
        <section class="section bg-sage">
            <div class="container text-center">
                <h1>About Gangotri Khadi</h1>
                <p>Our Story, Mission, and Impact</p>
            </div>
        </section>

        <!-- Our Story -->
        <section class="section bg-white">
            <div class="container" style="max-width: 900px;">
                <h2>Our Story</h2>
                <p>Gangotri Khadi was founded with a simple yet powerful vision: to celebrate the artistry of handmade khadi clothing while creating sustainable livelihoods for rural artisans across India. Our journey began with a deep appreciation for the traditional craftsmanship that has been woven into Indian culture for centuries.</p>
                <p>We recognized that despite the global demand for sustainable and ethical fashion, many skilled artisans in rural India struggle to earn fair wages for their exceptional work. Gangotri Khadi emerged as a bridge—connecting conscious consumers with artisans who pour their hearts into every piece of cloth.</p>
                <p>Today, we work with cooperative networks of weavers and artisans, ensuring that every product meets the highest standards of quality while providing fair compensation and dignified working conditions.</p>
            </div>
        </section>

        <!-- Vision & Mission -->
        <section class="section bg-cream">
            <div class="container">
                <div class="grid grid-2">
                    <div class="card" style="border-left: 4px solid var(--sage-600);">
                        <div class="card-body">
                            <h3 class="card-title">Our Vision</h3>
                            <p>A world where traditional handmade clothing is valued and celebrated, where rural artisans thrive economically, and where sustainable fashion is the norm rather than the exception.</p>
                        </div>
                    </div>
                    <div class="card" style="border-left: 4px solid var(--terracotta-600);">
                        <div class="card-body">
                            <h3 class="card-title">Our Mission</h3>
                            <p>To promote handmade khadi clothing, empower rural artisans through fair trade practices, preserve traditional Indian textile heritage, and advance sustainable fashion for a better future.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- How We Empower Artisans -->
        <section class="section bg-white">
            <div class="container">
                <div class="section-header">
                    <h2>How We Empower Artisans</h2>
                    <div class="section-divider"></div>
                </div>
                <div class="grid grid-3">
                    <div class="text-center">
                        <div style="width: 60px; height: 60px; background-color: var(--sage-100); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto var(--spacing-md); font-size: 1.5rem; font-weight: bold; color: var(--sage-700);">1</div>
                        <h3>Fair Wages</h3>
                        <p>We ensure artisans receive fair compensation that exceeds minimum wage standards, providing economic stability for their families.</p>
                    </div>
                    <div class="text-center">
                        <div style="width: 60px; height: 60px; background-color: var(--terracotta-100); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto var(--spacing-md); font-size: 1.5rem; font-weight: bold; color: var(--terracotta-700);">2</div>
                        <h3>Skill Development</h3>
                        <p>We invest in training programs to help artisans learn new techniques and improve their craft while preserving traditional methods.</p>
                    </div>
                    <div class="text-center">
                        <div style="width: 60px; height: 60px; background-color: var(--taupe-100); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto var(--spacing-md); font-size: 1.5rem; font-weight: bold; color: var(--taupe-700);">3</div>
                        <h3>Community Support</h3>
                        <p>We support artisan communities with healthcare, education initiatives, and cooperative structures for collective bargaining power.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="section bg-sage">
            <div class="container text-center" style="max-width: 600px;">
                <h2>Join Our Movement</h2>
                <p>Be part of a community that values craftsmanship, sustainability, and social impact.</p>
                <div class="flex flex-col gap-md" style="margin-top: var(--spacing-lg);">
                    <button class="btn btn-secondary" onclick="navigate('products'); return false;">Shop Now</button>
                    <button class="btn btn-tertiary" onclick="navigate('contact'); return false;">Get in Touch</button>
                </div>
            </div>
        </section>

        ${renderFooter()}
    `,

    products: `
        ${renderNavigation()}
        
        <!-- Page Header -->
        <section class="section bg-sage">
            <div class="container text-center">
                <h1>Our Products</h1>
                <p>Handwoven Khadi Clothing for Conscious Consumers</p>
            </div>
        </section>

        <!-- Products Grid -->
        <section class="section bg-cream">
            <div class="container">
                <div class="grid grid-3">
                    ${renderProductCard('Khadi Kurta', 'Traditional handwoven khadi kurta in sage green. Perfect for casual and formal occasions.', '₹1,299', 'https://d2xsxph8kpxj0f.cloudfront.net/310519663328381985/Sm4y3PfDgry3e8EmwV23wn/product-khadi-kurta-GZSHRvPUPpDAceMK976CQc.webp')}
                    ${renderProductCard('Khadi Saree', 'Elegant traditional khadi saree with natural dyes. Handwoven with intricate patterns.', '₹2,499', 'https://d2xsxph8kpxj0f.cloudfront.net/310519663328381985/Sm4y3PfDgry3e8EmwV23wn/product-khadi-saree-hgWVK7PT2mzPZD6KjxFLm9.webp')}
                    ${renderProductCard('Handmade Shirt', 'Premium khadi shirt with visible hand-stitching. Made from pure cotton fibers.', '₹1,599', 'https://d2xsxph8kpxj0f.cloudfront.net/310519663328381985/Sm4y3PfDgry3e8EmwV23wn/product-handmade-shirt-TcxfBE3wK6JW3fFQLQKKry.webp')}
                    ${renderProductCard('Traditional Dhoti', 'Authentic handwoven dhoti in cream and terracotta. Perfect for traditional wear.', '₹899', 'https://d2xsxph8kpxj0f.cloudfront.net/310519663328381985/Sm4y3PfDgry3e8EmwV23wn/artisans-at-work-GbZDomyFPgmtJLd85Te6Zk.webp')}
                    ${renderProductCard('Khadi Dupatta', 'Lightweight handwoven dupatta with natural texture. Versatile for all seasons.', '₹599', 'https://d2xsxph8kpxj0f.cloudfront.net/310519663328381985/Sm4y3PfDgry3e8EmwV23wn/product-khadi-kurta-GZSHRvPUPpDAceMK976CQc.webp')}
                    ${renderProductCard('Khadi Shawl', 'Warm and comfortable handwoven khadi shawl. Perfect for winter wear.', '₹1,199', 'https://d2xsxph8kpxj0f.cloudfront.net/310519663328381985/Sm4y3PfDgry3e8EmwV23wn/product-khadi-saree-hgWVK7PT2mzPZD6KjxFLm9.webp')}
                </div>
            </div>
        </section>

        <!-- Why Choose -->
        <section class="section bg-white">
            <div class="container">
                <div class="section-header">
                    <h2>Why Choose Gangotri Khadi?</h2>
                    <div class="section-divider"></div>
                </div>
                <div class="grid grid-4">
                    <div class="text-center">
                        <div style="font-size: 2.5rem; margin-bottom: var(--spacing-md);">🌿</div>
                        <h4>100% Natural</h4>
                        <p style="font-size: 0.9rem;">Made from pure cotton and natural dyes</p>
                    </div>
                    <div class="text-center">
                        <div style="font-size: 2.5rem; margin-bottom: var(--spacing-md);">🤝</div>
                        <h4>Fair Trade</h4>
                        <p style="font-size: 0.9rem;">Direct support to rural artisans</p>
                    </div>
                    <div class="text-center">
                        <div style="font-size: 2.5rem; margin-bottom: var(--spacing-md);">✋</div>
                        <h4>Handmade</h4>
                        <p style="font-size: 0.9rem;">Crafted with skill and tradition</p>
                    </div>
                    <div class="text-center">
                        <div style="font-size: 2.5rem; margin-bottom: var(--spacing-md);">♻️</div>
                        <h4>Sustainable</h4>
                        <p style="font-size: 0.9rem;">Eco-friendly and biodegradable</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="section bg-sage">
            <div class="container text-center" style="max-width: 600px;">
                <h2>Support Artisans Today</h2>
                <p>Every purchase directly supports rural artisans and preserves traditional craftsmanship.</p>
                <button class="btn btn-secondary" onclick="navigate('contact'); return false;" style="margin-top: var(--spacing-lg);">Have Questions? Contact Us</button>
            </div>
        </section>

        ${renderFooter()}
    `,

    mission: `
        ${renderNavigation()}
        
        <!-- Page Header -->
        <section class="section bg-sage">
            <div class="container text-center">
                <h1>Our Mission</h1>
                <p>Creating Sustainable Impact Through Handmade Fashion</p>
            </div>
        </section>

        <!-- Mission Statement -->
        <section class="section bg-white">
            <div class="container text-center" style="max-width: 800px;">
                <h2>Our Core Mission</h2>
                <p style="font-size: 1.1rem; font-style: italic; margin-top: var(--spacing-lg);">To empower rural artisans through fair trade, promote sustainable handmade khadi clothing, preserve traditional Indian textile heritage, and create a global movement toward ethical and conscious fashion.</p>
            </div>
        </section>

        <!-- Goals -->
        <section class="section bg-cream">
            <div class="container">
                <div class="section-header">
                    <h2>Our Goals</h2>
                    <div class="section-divider"></div>
                </div>
                <div class="grid grid-2">
                    <div class="card" style="border-left: 4px solid var(--sage-600);">
                        <div class="card-body">
                            <h3 class="card-title">👥 Empower Rural Artisans</h3>
                            <ul style="list-style: none; padding: 0;">
                                <li style="margin-bottom: var(--spacing-sm);">• Provide fair wages that exceed minimum standards</li>
                                <li style="margin-bottom: var(--spacing-sm);">• Create stable, long-term employment opportunities</li>
                                <li style="margin-bottom: var(--spacing-sm);">• Support artisan communities with healthcare and education</li>
                                <li>• Enable cooperative structures for collective growth</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card" style="border-left: 4px solid var(--terracotta-600);">
                        <div class="card-body">
                            <h3 class="card-title">🌿 Promote Sustainable Fashion</h3>
                            <ul style="list-style: none; padding: 0;">
                                <li style="margin-bottom: var(--spacing-sm);">• Use 100% natural fibers and eco-friendly dyes</li>
                                <li style="margin-bottom: var(--spacing-sm);">• Reduce environmental impact through handmade production</li>
                                <li style="margin-bottom: var(--spacing-sm);">• Advocate for conscious consumer choices</li>
                                <li>• Create biodegradable, long-lasting clothing</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card" style="border-left: 4px solid var(--taupe-600);">
                        <div class="card-body">
                            <h3 class="card-title">🏛️ Preserve Heritage</h3>
                            <ul style="list-style: none; padding: 0;">
                                <li style="margin-bottom: var(--spacing-sm);">• Keep traditional handloom techniques alive</li>
                                <li style="margin-bottom: var(--spacing-sm);">• Document and celebrate artisan stories</li>
                                <li style="margin-bottom: var(--spacing-sm);">• Pass down skills to younger generations</li>
                                <li>• Honor India's textile legacy</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card" style="border-left: 4px solid #16a34a;">
                        <div class="card-body">
                            <h3 class="card-title">🌍 Build Global Awareness</h3>
                            <ul style="list-style: none; padding: 0;">
                                <li style="margin-bottom: var(--spacing-sm);">• Educate consumers about ethical fashion</li>
                                <li style="margin-bottom: var(--spacing-sm);">• Create a global community of conscious consumers</li>
                                <li style="margin-bottom: var(--spacing-sm);">• Demonstrate the value of handmade craftsmanship</li>
                                <li>• Inspire other social enterprises</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Impact Metrics -->
        <section class="section bg-white">
            <div class="container">
                <div class="section-header">
                    <h2>Our Impact</h2>
                    <div class="section-divider"></div>
                </div>
                <div class="grid grid-4">
                    <div class="text-center" style="padding: var(--spacing-lg); background-color: var(--sage-50); border-radius: var(--radius-lg);">
                        <div style="font-size: 2.5rem; font-weight: bold; color: var(--sage-700); margin-bottom: var(--spacing-sm);">500+</div>
                        <p style="font-weight: 600;">Artisans Supported</p>
                    </div>
                    <div class="text-center" style="padding: var(--spacing-lg); background-color: var(--terracotta-50); border-radius: var(--radius-lg);">
                        <div style="font-size: 2.5rem; font-weight: bold; color: var(--terracotta-700); margin-bottom: var(--spacing-sm);">10K+</div>
                        <p style="font-weight: 600;">Products Sold</p>
                    </div>
                    <div class="text-center" style="padding: var(--spacing-lg); background-color: var(--taupe-50); border-radius: var(--radius-lg);">
                        <div style="font-size: 2.5rem; font-weight: bold; color: var(--taupe-700); margin-bottom: var(--spacing-sm);">₹50L+</div>
                        <p style="font-weight: 600;">Direct Income</p>
                    </div>
                    <div class="text-center" style="padding: var(--spacing-lg); background-color: #dcfce7; border-radius: var(--radius-lg);">
                        <div style="font-size: 2.5rem; font-weight: bold; color: #16a34a; margin-bottom: var(--spacing-sm);">15</div>
                        <p style="font-weight: 600;">Villages Reached</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- How You Can Help -->
        <section class="section bg-cream">
            <div class="container">
                <div class="section-header">
                    <h2>How You Can Help</h2>
                    <div class="section-divider"></div>
                </div>
                <div class="grid grid-3">
                    <div class="text-center">
                        <div style="font-size: 3rem; margin-bottom: var(--spacing-md);">🛍️</div>
                        <h3>Shop Consciously</h3>
                        <p>Purchase handmade khadi products and directly support artisan livelihoods.</p>
                        <button class="btn btn-primary" onclick="navigate('products'); return false;" style="margin-top: var(--spacing-md);">Shop Now →</button>
                    </div>
                    <div class="text-center">
                        <div style="font-size: 3rem; margin-bottom: var(--spacing-md);">❤️</div>
                        <h3>Make a Donation</h3>
                        <p>Contribute to our mission of supporting artisans and preserving heritage.</p>
                        <button class="btn btn-primary" onclick="navigate('donation'); return false;" style="margin-top: var(--spacing-md);">Donate Now →</button>
                    </div>
                    <div class="text-center">
                        <div style="font-size: 3rem; margin-bottom: var(--spacing-md);">📢</div>
                        <h3>Spread the Word</h3>
                        <p>Share our mission with friends and family. Every voice matters.</p>
                        <button class="btn btn-primary" onclick="alert('Share on your social media!'); return false;" style="margin-top: var(--spacing-md);">Share →</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="section bg-sage">
            <div class="container text-center" style="max-width: 600px;">
                <h2>Join Our Mission</h2>
                <p>Be part of a movement that values craftsmanship, sustainability, and human dignity.</p>
                <div class="flex flex-col gap-md" style="margin-top: var(--spacing-lg);">
                    <button class="btn btn-secondary" onclick="navigate('products'); return false;">Shop Now</button>
                    <button class="btn btn-tertiary" onclick="navigate('donation'); return false;">Donate</button>
                </div>
            </div>
        </section>

        ${renderFooter()}
    `,

    donation: `
        ${renderNavigation()}
        
        <!-- Page Header -->
        <section class="section bg-sage">
            <div class="container text-center">
                <h1>Support Our Mission</h1>
                <p>Help Us Empower Rural Artisans and Preserve Textile Heritage</p>
            </div>
        </section>

        <!-- Donation Message -->
        <section class="section bg-white">
            <div class="container" style="max-width: 900px;">
                <div class="section-header">
                    <h2>Your Generosity Makes a Difference</h2>
                </div>
                <p>Every donation to Gangotri Khadi directly supports rural artisans and helps us achieve our mission of promoting sustainable fashion and preserving traditional handloom craftsmanship. Your contribution, no matter the size, creates meaningful impact in the lives of artisans and their communities.</p>
                <p style="margin-top: var(--spacing-lg);">Donations support:</p>
                <div class="grid grid-2" style="margin-top: var(--spacing-lg);">
                    <div class="flex gap-md">
                        <span style="font-size: 1.5rem;">✓</span>
                        <div>
                            <h4>Fair Wages for Artisans</h4>
                            <p style="font-size: 0.9rem;">Ensuring artisans receive compensation above minimum wage standards</p>
                        </div>
                    </div>
                    <div class="flex gap-md">
                        <span style="font-size: 1.5rem;">✓</span>
                        <div>
                            <h4>Skill Development Programs</h4>
                            <p style="font-size: 0.9rem;">Training programs to enhance craftsmanship and learn new techniques</p>
                        </div>
                    </div>
                    <div class="flex gap-md">
                        <span style="font-size: 1.5rem;">✓</span>
                        <div>
                            <h4>Healthcare & Education</h4>
                            <p style="font-size: 0.9rem;">Supporting healthcare and educational initiatives in artisan communities</p>
                        </div>
                    </div>
                    <div class="flex gap-md">
                        <span style="font-size: 1.5rem;">✓</span>
                        <div>
                            <h4>Heritage Preservation</h4>
                            <p style="font-size: 0.9rem;">Documenting and preserving traditional textile techniques</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Donation Options -->
        <section class="section bg-cream">
            <div class="container">
                <div class="section-header">
                    <h2>Ways to Donate</h2>
                    <div class="section-divider"></div>
                </div>
                <div class="grid grid-2">
                    <div class="card" style="border-top: 4px solid var(--sage-600);">
                        <div class="card-body">
                            <h3 class="card-title">💳 UPI Donation</h3>
                            <p>Quick and easy donation through UPI. Scan the QR code or use the UPI ID below:</p>
                            <div style="background-color: var(--cream-100); padding: var(--spacing-lg); border-radius: var(--radius-md); margin: var(--spacing-lg) 0; text-align: center;">
                                <p style="font-size: 0.85rem; color: var(--gray-600); margin-bottom: var(--spacing-sm);">UPI ID</p>
                                <p style="font-size: 1.1rem; font-weight: bold; color: var(--sage-700);">gangotri.khadi@upi</p>
                            </div>
                            <p style="font-size: 0.9rem; color: var(--gray-600);">Or scan the QR code</p>
                        </div>
                    </div>
                    <div class="card" style="border-top: 4px solid var(--terracotta-600);">
                        <div class="card-body">
                            <h3 class="card-title">🏦 Bank Transfer</h3>
                            <p>Direct bank transfer for larger donations:</p>
                            <div style="margin: var(--spacing-lg) 0;">
                                <p style="font-size: 0.85rem; color: var(--gray-600);">Account Holder</p>
                                <p style="font-weight: bold; color: var(--sage-700); margin-bottom: var(--spacing-md);">Gangotri Khadi Initiative</p>
                                <p style="font-size: 0.85rem; color: var(--gray-600);">Account Number</p>
                                <p style="font-weight: bold; color: var(--sage-700); margin-bottom: var(--spacing-md);">1234567890123456</p>
                                <p style="font-size: 0.85rem; color: var(--gray-600);">IFSC Code</p>
                                <p style="font-weight: bold; color: var(--sage-700); margin-bottom: var(--spacing-md);">SBIN0001234</p>
                                <p style="font-size: 0.85rem; color: var(--gray-600);">Bank Name</p>
                                <p style="font-weight: bold; color: var(--sage-700);">State Bank of India</p>
                            </div>
                            <p style="font-size: 0.75rem; color: var(--gray-600);">Please mention "Donation" in the transfer reference</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Donation Tiers -->
        <section class="section bg-white">
            <div class="container">
                <div class="section-header">
                    <h2>Your Impact at Every Level</h2>
                    <div class="section-divider"></div>
                </div>
                <div class="grid grid-4">
                    <div style="background-color: var(--cream-50); padding: var(--spacing-lg); border-radius: var(--radius-lg); text-align: center; border: 2px solid var(--sage-200);">
                        <p style="font-size: 1.75rem; font-weight: bold; color: var(--sage-700); margin-bottom: var(--spacing-sm);">₹500</p>
                        <p style="font-weight: 600; color: var(--sage-800); margin-bottom: var(--spacing-sm);">Supporter</p>
                        <p style="font-size: 0.9rem; color: var(--gray-700);">Supports one artisan for a day</p>
                    </div>
                    <div style="background-color: var(--cream-50); padding: var(--spacing-lg); border-radius: var(--radius-lg); text-align: center; border: 2px solid var(--terracotta-200);">
                        <p style="font-size: 1.75rem; font-weight: bold; color: var(--terracotta-700); margin-bottom: var(--spacing-sm);">₹1,000</p>
                        <p style="font-weight: 600; color: var(--sage-800); margin-bottom: var(--spacing-sm);">Friend</p>
                        <p style="font-size: 0.9rem; color: var(--gray-700);">Provides materials for one week</p>
                    </div>
                    <div style="background-color: var(--cream-50); padding: var(--spacing-lg); border-radius: var(--radius-lg); text-align: center; border: 2px solid var(--taupe-200);">
                        <p style="font-size: 1.75rem; font-weight: bold; color: var(--taupe-700); margin-bottom: var(--spacing-sm);">₹5,000</p>
                        <p style="font-weight: 600; color: var(--sage-800); margin-bottom: var(--spacing-sm);">Champion</p>
                        <p style="font-size: 0.9rem; color: var(--gray-700);">Funds skill development program</p>
                    </div>
                    <div style="background-color: var(--cream-50); padding: var(--spacing-lg); border-radius: var(--radius-lg); text-align: center; border: 2px solid #bbf7d0;">
                        <p style="font-size: 1.75rem; font-weight: bold; color: #16a34a; margin-bottom: var(--spacing-sm);">₹10,000+</p>
                        <p style="font-weight: 600; color: var(--sage-800); margin-bottom: var(--spacing-sm);">Partner</p>
                        <p style="font-size: 0.9rem; color: var(--gray-700);">Transforms artisan community</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Tax Benefits -->
        <section class="section bg-cream">
            <div class="container" style="max-width: 700px;">
                <div class="card" style="border-left: 4px solid var(--sage-600);">
                    <div class="card-body">
                        <h3 class="card-title">📋 Tax Benefits</h3>
                        <p>Gangotri Khadi is registered as a non-profit organization. Donations may be eligible for tax deductions under applicable laws. Please consult with a tax professional for specific details regarding your donation.</p>
                        <p style="margin-top: var(--spacing-md);">We will provide a donation receipt for your records. For any questions about tax benefits, please contact us at <a href="mailto:donate@gangotri-khadi.org" style="color: var(--sage-700); font-weight: 600;">donate@gangotri-khadi.org</a></p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="section bg-sage">
            <div class="container text-center" style="max-width: 600px;">
                <h2>Every Contribution Counts</h2>
                <p>Whether you donate ₹100 or ₹10,000, you're making a real difference in the lives of artisans and their families.</p>
                <button class="btn btn-secondary" onclick="navigate('contact'); return false;" style="margin-top: var(--spacing-lg);">Have Questions? Contact Us</button>
            </div>
        </section>

        ${renderFooter()}
    `,

    contact: `
        ${renderNavigation()}
        
        <!-- Page Header -->
        <section class="section bg-sage">
            <div class="container text-center">
                <h1>Get in Touch</h1>
                <p>We'd love to hear from you. Reach out with any questions or inquiries.</p>
            </div>
        </section>

        <!-- Contact Information -->
        <section class="section bg-white">
            <div class="container">
                <div class="grid grid-3" style="margin-bottom: var(--spacing-3xl);">
                    <div class="text-center">
                        <div style="font-size: 2rem; margin-bottom: var(--spacing-md);">📧</div>
                        <h3>Email</h3>
                        <p><a href="mailto:info@gangotri-khadi.org" style="color: var(--sage-700); font-weight: 600;">info@gangotri-khadi.org</a></p>
                        <p style="font-size: 0.85rem; color: var(--gray-600); margin-top: var(--spacing-sm);">General inquiries</p>
                    </div>
                    <div class="text-center">
                        <div style="font-size: 2rem; margin-bottom: var(--spacing-md);">📱</div>
                        <h3>Phone</h3>
                        <p><a href="tel:+919876543210" style="color: var(--sage-700); font-weight: 600;">+91 98765 43210</a></p>
                        <p style="font-size: 0.85rem; color: var(--gray-600); margin-top: var(--spacing-sm);">Available 9 AM - 6 PM IST</p>
                    </div>
                    <div class="text-center">
                        <div style="font-size: 2rem; margin-bottom: var(--spacing-md);">💬</div>
                        <h3>WhatsApp</h3>
                        <p><a href="https://wa.me/919876543210" target="_blank" style="color: var(--sage-700); font-weight: 600;">+91 98765 43210</a></p>
                        <p style="font-size: 0.85rem; color: var(--gray-600); margin-top: var(--spacing-sm);">Quick responses</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Form -->
        <section class="section bg-cream">
            <div class="container" style="max-width: 600px;">
                <h2 class="text-center">Send us a Message</h2>
                <form onsubmit="handleContactForm(event)" style="background-color: var(--light-white); padding: var(--spacing-lg); border-radius: var(--radius-lg); box-shadow: var(--shadow-md);">
                    <div class="form-group">
                        <label for="name">Full Name *</label>
                        <input type="text" id="name" name="name" required placeholder="Your name">
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address *</label>
                        <input type="email" id="email" name="email" required placeholder="your@email.com">
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210">
                    </div>
                    <div class="form-group">
                        <label for="message">Message *</label>
                        <textarea id="message" name="message" required placeholder="Tell us how we can help..."></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>
                </form>
            </div>
        </section>

        <!-- Social Media -->
        <section class="section bg-white">
            <div class="container text-center" style="max-width: 700px;">
                <h2>Follow Us</h2>
                <p>Stay connected with us on social media for updates, stories, and inspiration.</p>
                <div class="flex flex-col gap-md" style="margin-top: var(--spacing-lg); justify-content: center;">
                    <a href="#" style="color: var(--sage-700); font-weight: 600;">📘 Facebook</a>
                    <a href="#" style="color: var(--sage-700); font-weight: 600;">📷 Instagram</a>
                    <a href="#" style="color: var(--sage-700); font-weight: 600;">𝕏 Twitter</a>
                    <a href="#" style="color: var(--sage-700); font-weight: 600;">in LinkedIn</a>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section class="section bg-cream">
            <div class="container" style="max-width: 700px;">
                <div class="section-header">
                    <h2>Frequently Asked Questions</h2>
                    <div class="section-divider"></div>
                </div>
                <div class="space-y-lg">
                    <div class="card" style="border-left: 4px solid var(--sage-600);">
                        <div class="card-body">
                            <h4>How long does shipping take?</h4>
                            <p>We typically ship within 3-5 business days. Delivery times vary based on location.</p>
                        </div>
                    </div>
                    <div class="card" style="border-left: 4px solid var(--terracotta-600);">
                        <div class="card-body">
                            <h4>Do you offer international shipping?</h4>
                            <p>Currently, we ship within India. Please contact us for international inquiries.</p>
                        </div>
                    </div>
                    <div class="card" style="border-left: 4px solid var(--taupe-600);">
                        <div class="card-body">
                            <h4>What is your return policy?</h4>
                            <p>We accept returns within 30 days of purchase. Items must be in original condition.</p>
                        </div>
                    </div>
                    <div class="card" style="border-left: 4px solid #16a34a;">
                        <div class="card-body">
                            <h4>How can I support artisans?</h4>
                            <p>You can support artisans by purchasing our products or making a donation. Every contribution helps!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="section bg-sage">
            <div class="container text-center" style="max-width: 600px;">
                <h2>Ready to Make a Difference?</h2>
                <p>Shop our products or make a donation to support rural artisans.</p>
                <div class="flex flex-col gap-md" style="margin-top: var(--spacing-lg);">
                    <button class="btn btn-secondary" onclick="navigate('products'); return false;">Shop Now</button>
                    <button class="btn btn-tertiary" onclick="navigate('donation'); return false;">Donate</button>
                </div>
            </div>
        </section>

        ${renderFooter()}
    `
};

// ============================================
// 2. HELPER FUNCTIONS
// ============================================

function renderNavigation() {
    return `
        <nav>
            <div class="container">
                <a href="#" class="nav-brand" onclick="navigate('home'); return false;">Gangotri Khadi</a>
                <ul class="nav-links">
                    <li><a href="#" onclick="navigate('home'); return false;">Home</a></li>
                    <li><a href="#" onclick="navigate('about'); return false;">About</a></li>
                    <li><a href="#" onclick="navigate('products'); return false;">Products</a></li>
                    <li><a href="#" onclick="navigate('mission'); return false;">Mission</a></li>
                    <li><a href="#" onclick="navigate('donation'); return false;">Donate</a></li>
                    <li><a href="#" onclick="navigate('contact'); return false;">Contact</a></li>
                </ul>
                <button class="mobile-menu-btn" onclick="toggleMobileMenu()">☰</button>
            </div>
            <div id="mobile-menu">
                <a href="#" onclick="navigate('home'); return false;">Home</a>
                <a href="#" onclick="navigate('about'); return false;">About</a>
                <a href="#" onclick="navigate('products'); return false;">Products</a>
                <a href="#" onclick="navigate('mission'); return false;">Mission</a>
                <a href="#" onclick="navigate('donation'); return false;">Donate</a>
                <a href="#" onclick="navigate('contact'); return false;">Contact</a>
            </div>
        </nav>
    `;
}

function renderFooter() {
    return `
        <footer class="bg-gray">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-section">
                        <h4>Gangotri Khadi</h4>
                        <p>Supporting rural artisans through sustainable fashion.</p>
                    </div>
                    <div class="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#" onclick="navigate('about'); return false;">About Us</a></li>
                            <li><a href="#" onclick="navigate('products'); return false;">Products</a></li>
                            <li><a href="#" onclick="navigate('mission'); return false;">Our Mission</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#" onclick="navigate('contact'); return false;">Contact Us</a></li>
                            <li><a href="#" onclick="navigate('donation'); return false;">Donate</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>Follow Us</h4>
                        <div class="flex gap-md">
                            <a href="#">Facebook</a>
                            <a href="#">Instagram</a>
                            <a href="#">Twitter</a>
                        </div>
                    </div>
                </div>
                <div class="footer-divider">
                    <p>&copy; 2024 Gangotri Khadi. All rights reserved. | Supporting Rural Artisans & Sustainable Fashion</p>
                </div>
            </div>
        </footer>
    `;
}

function renderProductCard(name, description, price, image) {
    return `
        <div class="card">
            <img src="${image}" alt="${name}" class="card-image">
            <div class="card-body">
                <h3 class="card-title">${name}</h3>
                <p class="card-text">${description}</p>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-md);">
                    <span class="card-price">${price}</span>
                    <span class="badge">Handwoven</span>
                </div>
                <a href="https://wa.me/919876543210?text=Hi! I'm interested in the ${name}. Can you provide more details?" target="_blank" class="btn btn-whatsapp">Order on WhatsApp</a>
            </div>
        </div>
    `;
}

// ============================================
// 3. NAVIGATION & ROUTING
// ============================================

function navigate(page) {
    const app = document.getElementById('app');
    if (pages[page]) {
        app.innerHTML = pages[page];
        window.scrollTo(0, 0);
        closeMobileMenu();
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.remove('active');
    }
}

// ============================================
// 4. FORM HANDLING
// ============================================

function handleContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    // Show success message
    alert(`Thank you for your message, ${name}! We will get back to you soon at ${email}.`);

    // Reset form
    event.target.reset();
}

// ============================================
// 5. INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');
    if (app) {
        navigate('home');
    }
});
