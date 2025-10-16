import { motion } from 'motion/react';
import { useMemo, useState } from 'react';
import '../styles/Gallery.scss';

type GalleryFilter = 'all' | 'design' | 'art' | '3d' | 'motion';

const galleryItems = [
	{ id: 1, title: 'Urban Dreams', category: 'design', image: '/assets/gallery/works_thumnail_01.jpg' },
	{ id: 2, title: 'Digital Flow', category: 'motion', image: '/assets/gallery/works_thumnail_02.jpg' },
	{ id: 3, title: 'Chromatic Waves', category: 'art', image: '/assets/gallery/works_thumnail_03.jpg' },
	{ id: 4, title: 'Future Vision', category: 'art', image: '/assets/gallery/works_thumnail_04.jpg' },
	{ id: 5, title: 'Vibrant Echoes', category: 'design', image: '/assets/gallery/works_thumnail_05.jpg' },
	{ id: 6, title: 'Neon Streets', category: 'motion', image: '/assets/gallery/works_thumnail_06.jpg' },
	{ id: 8, title: 'Liquid Bloom', category: 'art', image: '/assets/gallery/works_thumnail_08.jpg' },
	{ id: 9, title: 'Geometric Soul', category: 'design', image: '/assets/gallery/works_thumnail_09.jpg' },
	{ id: 10, title: 'Cyber Pulse', category: 'motion', image: '/assets/gallery/works_thumnail_10.jpg' },
	{ id: 12, title: 'Ethereal Light', category: 'art', image: '/assets/gallery/works_thumnail_12.jpg' },
	{ id: 13, title: 'Data Poetry', category: 'design', image: '/assets/gallery/works_thumnail_13.jpg' },
	{ id: 14, title: 'Sound Waves', category: 'motion', image: '/assets/gallery/works_thumnail_14.jpg' },
	{ id: 15, title: 'Pixel Paradise', category: 'design', image: '/assets/gallery/works_thumnail_15.jpg' },
	{ id: 16, title: 'Motion Blur', category: 'motion', image: '/assets/gallery/works_thumnail_16.jpg' },
	{ id: 17, title: 'Neural Net', category: '3d', image: '/assets/gallery/works_thumnail_17.jpg' },
	{ id: 18, title: 'Time Lapse', category: '3d', image: '/assets/gallery/works_thumnail_18.jpg' },
];

const Gallery = () => {
	const [activeFilter, setActiveFilter] = useState<GalleryFilter>('all');

	const filters: GalleryFilter[] = useMemo(
		() => ['all', 'design', 'art', '3d', 'motion'],
		[],
	);

	const filteredItems = useMemo(() => {
		if (activeFilter === 'all') {
			return galleryItems;
		}
		return galleryItems.filter((item) => item.category === activeFilter);
	}, [activeFilter]);

	return (
		<section className="gallery" id="gallery">
			<div className="gallery__container">
				<div className="gallery__header">
					<div className="gallery__title-wrapper">
						<motion.span
							className="gallery__eyebrow"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							Full gallery
						</motion.span>
						<motion.h2
							className="gallery__title"
							initial={{ opacity: 0, y: 80 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
						>
							Explore The Archive
						</motion.h2>
					</div>

					<motion.div
						className="gallery__filters"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2, duration: 0.6 }}
					>
						{filters.map((filter) => (
							<button
								key={filter}
								type="button"
								className={`gallery__filter ${activeFilter === filter ? 'gallery__filter--active' : ''}`}
								onClick={() => setActiveFilter(filter)}
							>
								{filter}
							</button>
						))}
					</motion.div>
				</div>

				<motion.div
					className="gallery__grid"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
				>
					{filteredItems.map((item, index) => (
						<motion.article
							key={item.id}
							className="gallery__card"
							initial={{ opacity: 0, y: 80 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.05, duration: 0.5 }}
						>
							<div className="gallery__card-image">
								<img src={item.image} alt={item.title} />
								<div className="gallery__card-overlay">
									<span>{item.category}</span>
									<h3>{item.title}</h3>
								</div>
							</div>
						</motion.article>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Gallery;
