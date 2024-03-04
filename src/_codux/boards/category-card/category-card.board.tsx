import { createBoard } from '@wixc3/react-board';
import { CategoryCard } from '../../../components/category-card/category-card';

export default createBoard({
    name: '📦 CategoryCard',
    Board: () => <CategoryCard />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 365,
        windowBackgroundColor: '#eeeeee',
        windowWidth: 1024,
    },
});
