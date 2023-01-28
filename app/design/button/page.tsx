import Button from "@/ui/system/Button/Button";

export default () => {
    return (
        <div>
            <div className="flex items-start flex-wrap gap-5">
                <Button size="xs">Terminer</Button>
                <Button size="sm">Terminer</Button>
                <Button>Terminer</Button>
                <Button size="lg">Terminer</Button>
                <Button size="xl">Terminer</Button>
                <Button>Terminer</Button>
                <Button variant="outline">Terminer</Button>
                <Button variant="plain">Terminer</Button>

                {/*  */}
                <Button size="xs" colorScheme="danger">
                    Terminer
                </Button>
                <Button size="sm" colorScheme="danger">
                    Terminer
                </Button>
                <Button colorScheme="danger">Terminer</Button>
                <Button size="lg" colorScheme="danger">
                    Terminer
                </Button>
                <Button size="xl" colorScheme="danger">
                    Terminer
                </Button>
                <Button colorScheme="danger">Terminer</Button>
                <Button variant="outline">Terminer</Button>
                <Button variant="plain" fullWidth>
                    Terminer
                </Button>
            </div>
        </div>
    );
};
